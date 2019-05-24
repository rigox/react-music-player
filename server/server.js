//dependencies
const express =  require("express");
const  bodyParser =   require("body-parser")
const form =  require('formidable');
const fs  = require("fs")
const file_meta_data  = require("file-metadata")


const PORT  =  process.env.PORT || 8080
const app  =  express();
//models and files
const media  = require("mediaserver");
const Track  = require("./models/Tracks")
const moongose =  require("./models/moongose")

//middleware setup
app.use(bodyParser.urlencoded({
    extended: true}

))
app.use(bodyParser.json())


//methods - helper


// function is available  for retrival of meta-data 
// for the moment opting for user input is more preferable
async  function fetchMetaData(file){
    temp={
        title:null,
        Artist:null,
        Genre:null
    }  
    meta  = await  file_meta_data(file)
    if(meta.hasOwnProperty('title')){
         temp.title =  meta.title
    }
    if(meta.hasOwnProperty('authors')){
               temp.Artist  = meta.authors
    }
    if(meta.hasOwnProperty('musicalGenre')){
          temp.Genre  =  meta.musicalGenre
    }


    return  temp;
}







//route handling
app.get('/test',(req,res)=>{
       res.send("Hello welcome to the test section")
})





app.post('/upload',(req,res)=>{
    let f  =  new form.IncomingForm()
    
    f.parse(req,(err,fields,files)=>{
         if(err){throw err }
          
         
        console.log(fields)

           var track  = new Track({
                 name:files.song_file.name,
                 Artist:fields.Artist,
                 Genre:fields.Genre,
                 song_path:__dirname+'/music/'+files.song_file.name,
                 Artwork:__dirname +'/Artwork/'+files.artwork_file.name
           })


      
        

          
          var path  =  __dirname +'/music/'+ files.song_file.name;
          var artwork_path  = __dirname+'/Artwork/'+files.artwork_file.name;
          var read_art  =  fs.createReadStream(files.artwork_file.path)
          var write_art  = fs.createWriteStream(artwork_path)
          var readStream =  fs.createReadStream(files.song_file.path)
          var writeStream  =  fs.createWriteStream(path)
          readStream.pipe(writeStream)
          read_art.pipe(write_art)
           
          track.save(function(err,book){
                if(err){
                     throw err;
                }
                console.log("Saved")
                res.redirect('/Player')
          })

        });

    });


app.get('/music',(req,res)=>{
     media.pipe(req,res,'./music/a.mp3')

});


app.get("/fetch_music",(req,res)=>{
    
    var path  =  String(req.query.path)
    media.pipe(req,res,path)
    
})

app.get('/default_image',(req,res)=>{
        res.writeHead(200,{'Content-Type':'image/jpg'})
        var fileReader =  fs.createReadStream('./Artwork/winds.jpeg');
        fileReader.pipe(res)
});

app.get('/fetch_artwork',(req,res)=>{
       const  path =  String(req.query.path)
       res.writeHead(200,{'Content-Type':'image/jpg'})
       var fileReader   =  fs.createReadStream(path);
       fileReader.pipe(res);

})


app.get('/fetch_data',(req,res)=>{

     Track.find({},function(err,docs){

          console.log(docs)

          res.send(JSON.stringify(docs))
     })



})


app.get('/fetch_track',(req,res)=>{
   
    if(!req.query.track_id){
          res.send("Track not found")
    }
   const track_id  =  req.query.track_id
   
   Track.findById(track_id,(err,doc)=>{
           res.send(JSON.stringify(doc))
   })


})




app.listen(PORT)







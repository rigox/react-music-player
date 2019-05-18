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
    
         
           var track  = new Track({
                 name:a.title,
                 Artist:a.Artist,
                 Genre:a.Genre,
                 song_path:__dirname+'/music'+files.song_file.name,
                 Artwork:'NoNe'
           })
        track.save()


      })
        


          var path  =  __dirname + '/music/'+ files.song_file.name;
          var readStream =  fs.createReadStream(files.song_file.path)
          var writeStream  =  fs.createWriteStream(path)
          readStream.pipe(writeStream)
    });



app.get("/music",(req,res)=>{
    media.pipe(req,res,'./music/a.mp3')
})




app.listen(PORT)







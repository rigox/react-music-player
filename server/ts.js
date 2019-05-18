const fileMetadata = require('file-metadata');



async  function fetchMetaData(file){
    temp={
        title:null,
        Artist:null,
        Genre:null
    }  
    meta  = await  fileMetadata(file)
    if(meta.hasOwnProperty('title')){
         temp.title =  meta.title
    }
    if(meta.hasOwnProperty('authors')){
               temp.Artist  = meta.authors
    }
    if(meta.hasOwnProperty('musicalGenre')){
          temp.Genre  =  meta.musicalGenre
    }


    return  meta;
}


console.log(fetchMetaData('./music/hello.mp3').then((a)=>{console.log(a)}))



const moongose =    require("mongoose")


var trackSchema = new moongose.Schema({
    name:String,
    Artist:String,
    Artwork:String,
    song_path:String,
    Genre:String
});

var Track   = moongose.model('Track',trackSchema)


module.exports   = Track;



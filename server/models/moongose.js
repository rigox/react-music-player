const keys =  require("../config/keys");
var  moongose =  require("mongoose")
moongose.Promise = global.Promise

moongose.connect(keys.mongo_url,function(err){ if(err){throw err} console.log("success")})



module.exports={
    moongose:moongose
}

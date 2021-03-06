const proxy =  require("http-proxy-middleware");



module.exports  = function(app){
      app.use(proxy('/upload',{target:'http://localhost:8080'}));
      app.use(proxy('/fetch_artwork',{target:'http://localhost:8080'}));
      app.use(proxy("/test",{target:'http://localhost:8080'}));
      app.use(proxy("/fetch_data",{target:'http://localhost:8080'}));
      app.use(proxy("/fetch_track",{target:'http://localhost:8080'}));
      app.use(proxy("/default_image",{target:'http://localhost:8080'}));
      app.use(proxy("/fetch_music",{target:'http://localhost:8080'}));



}

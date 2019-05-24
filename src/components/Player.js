import React from 'react';
import ReactPlayer from 'react-player';
import  Track from './Track'
import Axios from 'axios';


class Player extends React.Component{

        state={
          track_id:'a',
          controls:true,
          music_url:"http://localhost:8080/music",
          album_url:"http://localhost:8080/default_image",
          tracks:[],
          helper:this.helper.bind(this)
        }
      

        
    fetchData= async()=>{
        
      const data = await Axios.get('/fetch_data');

      const records  = data.data

      this.setState({tracks:records})

      console.log(records)
  }

  makeTracks(fn){
       var list  = this.state.tracks.map(function(a){
                console.log()
              return(
               <div className="row centered">
              <Track  helper={fn} track={a} />
              </div>
              
              )
       })

       return list;
  }


  helper(prop){
   const new_url =  'http://localhost:8080/fetch_music/?path='
   const album_url = 'http://localhost:8080/fetch_artwork/?path='
      Axios.get('/fetch_track',{
          params:{
             track_id:prop
          }
      }).then((a)=>{
        this.setState({music_url:new_url+a.data.song_path})
        this.setState({album_url:album_url+a.data.Artwork})
      });

  }

  componentDidMount(){
     
   this.fetchData();


  }



    

      render(){
             return(
                  <div className="ui six column grid">
                  <div className="row centered">
                        <img className="ui large rounded image" src={this.state.album_url}/>
                 
                  </div>
                    <div className="row centered">
                       <ReactPlayer
                         controls={this.state.controls}
                         url={this.state.music_url}
                         height="7%"
                         width="60%"
                       />
                        <div className="">
                        {this.makeTracks(this.state.helper)}
                        </div>
                      </div>
                      
                       
                      
                      </div>
            )
      }
    }




export default Player;
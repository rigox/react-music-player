import React from 'react';
import ReactPlayer from 'react-player';
import  Track from './Track'
import Axios from 'axios';


class Player extends React.Component{

        state={
          controls:true,
          music_url:"http://localhost:8080/music",
          album_url:"http://localhost:8080/default_image",
          tracks:[{name:"Test",Artist:"Tets",Genre:"test"}]
        }
      

        
    fetchData= async()=>{
        
      const data = await Axios.get('/fetch_data');

      const records  = data.data

      this.setState({tracks:records})

      console.log(records)
  }

  makeTracks(fn){
       var list  = this.state.tracks.map(function(a){
              return(
               <div className="row centered">
              <Track  onClick={fn}  track={a} />
              </div>
              )
       })

       return list;
  }


  getID=(prop)=>{
      console.log(prop.track._id)
  }

  componentWillMount(){
     
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
                         height="5%"
                         width="60%"
                       />
                        <div className="">
                        {this.makeTracks(this.getID)}
                        </div>
                      </div>
                      
                       
                      
                      </div>
            )
      }
    }




export default Player;
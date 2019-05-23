import React from 'react';
import ReactPlayer from 'react-player';
import  Track from './Track'
import Axios from 'axios';


class Player extends React.Component{

        state={
          controls:true,
          music_url:"http://localhost:8080/music",
          album_url:"http://localhost:8080/default_image",
          tracks:[]
        }
      

        
    fetchData= async()=>{
        
      const data = await Axios.get('/fetch_data');

      const records  = data.data

      this.setState({tracks:records})

      console.log(records)


  }

  componentWillMount(){
     
      this.fetchData();


  }

  


    

      render(){
             return(
                  <div className="ui four column grid">
                  <div className="row centered">
                        <img className="ui large rounded image" src={this.state.album_url}/>
                 
                  </div>
                   <div className="row centered">
                   {
                     this.state  && this.state.tracks &&
                       <ReactPlayer
                         controls={this.state.controls}
                         url={this.state.music_url}
                         height="5%"
                         width="60%"
                       />
                   }
                      </div>
                </div>
            )
      }
    }




export default Player;
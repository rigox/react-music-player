import React from 'react';
import ReactPlayer from 'react-player';
import {Howl, Howler} from 'howler';
class Player extends React.Component{

    state={
          controls:true
    }


    

      render(){
             return(
                  <div>
                       <ReactPlayer
                         controls={this.state.controls}
                         url={"http://localhost:8080/music"}
                        
                       />
                      </div>
            )
      }
    }




export default Player;
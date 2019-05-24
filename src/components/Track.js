import React from 'react';

class Track extends  React.Component{
  
   constructor(props){
       super(props);
       console.log("constructor")
       this.state={
            _id:props.track._id,
            name:props.track.name,
            Artist:props.track.Artist,
            Genre:props.track.Genre,
            helper:props.helper
       }
   }


    render(){

    return(
        <div onClick={(e) => this.state.helper(this.state._id,e)} className="ui huge horizontal centered list" style={{margin:'5px', backgroundColor:'blue', borderRadius:'10px', cursor:'pointer'}}>
        <div className="item " style={{margin:'10px'}}>

            {this.state.name}
        </div>
        <div className="item" style={{margin:'10px'}}>
                {this.state.Artist}
        </div>
        <div className="item" style={{margin:'10px'}}>
                    {this.state.Genre}
           </div>
        </div>
         
        )

    }
}



export default Track;



/*
     <div   className="ui huge horizontal centered list" style={{margin:'5px', backgroundColor:'blue', borderRadius:'10px', cursor:'pointer'}}>
            <div className="item " style={{margin:'10px'}}>
                {props.track.name}
            </div>
            <div className="item" style={{margin:'10px'}}>
                    {props.track.Artist}
            </div>
            <div className="item" style={{margin:'10px'}}>
                        {props.track.Genre}
               </div>
            </div
*/
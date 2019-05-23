import React from 'react';

const Track =(props)=>{
    return(
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
            </div>

    )
}



export default Track;
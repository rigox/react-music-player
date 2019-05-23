import React from 'react';

const Track =(props)=>{
    return(<div>
      <div className="row centered">
            <div className="ui relaxed horizontal list">
            <div className="item">
                {props.Name}
            </div>
            <div className="item">
                    {props.Artist}
            </div>
            <div className="item">
                    {props.Genre}
            </div>
            </div>

      </div>
    </div>)
}



export default Track;
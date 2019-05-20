import React from  'react';




class Options extends React.Component{
    
    renderOptions = ()=>{
        var Genres=["Latin","Rap","Rock","Metal","Jazz","Country","Hip Hop","Instrumental","Soul"]
        var list =  Genres.map(function(genre){
             return <option value={genre}>{genre}</option>
        })
        return(list)
    }
    
    
    render(){
           return(
               <select name="Genre" className="ui fluid dropdown">
                        {this.renderOptions()}
               </select>
           )
      }
}


export default Options;
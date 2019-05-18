import React from 'react';
import {Link}  from 'react-router-dom';

const Header = () =>{
        return(
             <div className="ui secondary pointing menu">
                 <Link to="/Player" className="item">
                   Player
                 </Link>
                 <div className="right menu">
                    <Link to="/Form"  className="item">
                     Form
                    </Link>
                 </div>

             </div>
        )
}



export default Header;
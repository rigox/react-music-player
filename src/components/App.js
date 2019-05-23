import React from 'react';
import  Form from './Form';
import Player  from './Player'
import {BrowserRouter,Route}  from 'react-router-dom'
import Header from './Header';
import Axios from 'axios';


class App extends React.Component{
   
   


      render(){
            return(
                <div>
                    <BrowserRouter>
                    <div className="ui container">
                    <Header />
                    <Route path="/Form"  exact component={Form} />
                    <Route path="/Player" exact component={Player}/>
                    </div> 
                    </BrowserRouter>
                </div>
            )
      }

}



export default App;



import React from 'react';
import  Form from './Form';
import Player  from './Player'
import {BrowserRouter,Route}  from 'react-router-dom'
import Header from './Header';

class App extends React.Component{





   state  = {}
      render(){
            return(
                <div>
                    <BrowserRouter>
                    <div>
                    <Header />
                    <Route path="/Form"  exact component={Form} />
                    <Route path="/Player" exact component={Player} />
                    </div>
                    </BrowserRouter>
                </div>
            )
      }

}



export default App;



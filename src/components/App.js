
import React  from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from "./About"
import Projects from './Projects';
import Resume from './Resume';

import Socials from './Socials';


const App=()=>{


    return (
      <div> <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/Resume" exact component={Resume}/>
        <Route path="/Projects" exact component={Projects}/>
        <Route path="/Socials" exact component={Socials}/>
      </Switch>
      </BrowserRouter></div>
     
     );

         
  }

export default App;
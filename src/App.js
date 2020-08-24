import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={ Header }></Route>
      <Route exact path="/contactus" component= { Contact }></Route>
      <Route exact path="/donate" component= { Donate }></Route>
      <Route exact path="/aboutus" component= { About }></Route> 
      <Route component={ NotFound }/>
    </Switch>
    </div>
  );
}

export default App;
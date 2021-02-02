import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/details/:id" component={Details}/>
        </Switch>
      </div>
    </Router>

// https://601873f9971d850017a4004a.mockapi.io/plants

  );
}

export default App;

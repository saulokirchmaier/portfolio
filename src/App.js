import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/about" component={ About } />
      {/* <Route path="/projects" component={ About } />
      <Route path="/contact" component={ About } /> */}
      <Route exact path="/" component={ Home } />
      <Route component={ NotFound } />
    </Switch>  
  );
}

export default App;

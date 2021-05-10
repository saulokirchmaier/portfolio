import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Switch>
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contact" component={ Contact } />
      <Route exact path="/" component={ Home } />
      <Route component={ NotFound } />
    </Switch>  
  );
}

export default App;

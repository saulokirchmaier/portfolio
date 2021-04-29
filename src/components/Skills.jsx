import React from 'react';
import rocket from '../img/rocket.svg'
import './Skills.css';
 
function Skills() {
  return (
    <div className="Content Skills">
      <h1>Skills</h1>
      <div className="description">
        <div>
          <h3>Front-End</h3>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Git/Github</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Jest</p>
          <p>Testes Unitários</p>
        </div>
        <img src={ rocket } alt="Rocket" className="rocket"/>
      </div>
    </div>
  );
}

export default Skills;

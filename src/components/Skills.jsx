import React from 'react';
import rocket from '../img/rocket.svg'
import './Skills.css';
import { Javascript,
  ReactJs,
  Redux,
  CssThree,
  Html5,
  Git,
  Github,
  Jest,
  Testinglibrary,
  Mysql,
  Mongodb,
  NodeDotJs
} from '@icons-pack/react-simple-icons';
import { FiCode } from "react-icons/fi";

function Skills() {
  return (
    <div className="Content Skills">
      <h1>Skills</h1>
      <div className="my-skils">
        <div className="flex-order-1">
          <div className="stack">
            <h3>Front-End</h3>
            <FiCode />
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <Javascript className="icon-skill"/>
          </div>
          <div className="skill">
            <p>React</p>
            <ReactJs className="icon-skill"/>
          </div>
          <div className="skill">
            <p>Redux</p>
            <Redux className="icon-skill"/>
          </div>
          <div className="skill">
            <p>Git</p>
            <Git className="icon-skill"/>
          </div>
          <div className="skill">
            <p>Github</p>
            <Github className="icon-skill"/>
          </div>
          <div className="skill">
            <p>HTML</p>
            <Html5 className="icon-skill"/>
          </div>
          <div className="skill">
            <p>CSS</p>
            <CssThree className="icon-skill"/>
          </div>
          <div className="skill">
            <p>Jest</p>
            <Jest className="icon-skill"/>
          </div>
          <div className="skill">
            <p>Testes Unitários</p>
            <Testinglibrary className="icon-skill"/>
          </div>
        </div>
        <img src={ rocket } alt="Rocket" className="rocket flex-order-2"/>
        <div className="flex-order-3">
          <div className="stack">
            <h3>Back-End</h3>
            <FiCode />
          </div>
          <div className="skill">
            <p>MySQL</p>
            <Mysql className="icon-skill"/>
          </div>
          <div className="skill">
            <p>MongoDB</p>
            <Mongodb className="icon-skill"/>
          </div>
          <div className="skill">
            <p>Node.JS</p>
            <NodeDotJs className="icon-skill"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

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
} from '@icons-pack/react-simple-icons';
import { FiCode } from "react-icons/fi";

function Skills() {
  return (
    <div className="Content Skills">
      <h1>Skills</h1>
      <div className="my-skils">
        <div className="flex-order-1">
          <div>
            <h3>Front-End <FiCode /></h3>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <Javascript />
          </div>
          <div className="skill">
            <p>React</p>
            <ReactJs />
          </div>
          <div className="skill">
            <p>Redux</p>
            <Redux />
          </div>
          <div className="skill">
            <p>Git</p>
            <Git />
          </div>
          <div className="skill">
            <p>Github</p>
            <Github />
          </div>
          <div className="skill">
            <p>HTML</p>
            <Html5 />
          </div>
          <div className="skill">
            <p>CSS</p>
            <CssThree />
          </div>
          <div className="skill">
            <p>Jest</p>
            <Jest />
          </div>
          <div className="skill">
            <p>Testes Unitários</p>
            <Testinglibrary />
          </div>
        </div>
        <img src={ rocket } alt="Rocket" className="rocket flex-order-2"/>
        <div className="flex-order-3">
          <h3>Back-End <FiCode /></h3>
          <p>Incoming...</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

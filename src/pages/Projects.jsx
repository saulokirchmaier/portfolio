import React from 'react';
import { data } from '../data';
import Header from '../components/Header';
import island from '../img/island.svg';
import '../components/Card.css';
import Cards from '../components/Cards';

function About() {
  return (
    <div className="App">
      <Header />
      <section className="Content">
        <h1>Projects</h1>
          <div className="Projects">
            {data.map((item) => <Cards data={item} key={ item.type } /> )}
          </div>
        <img src={ island } alt="Not Found!"/>
      </section>
    </div>
  );
}

export default About;

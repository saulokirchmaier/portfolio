import React from 'react';
import Header from '../components/Header';
// import notFoundImg from '../img/notfound.svg';
import notFoundImg from '../img/Asset9.svg';

function About() {
  return (
    <div className="App">
      <Header />
      <section className="Content">
        <h1>Página em construção!</h1>
        <img src={ notFoundImg } alt="Not Found!"/>
      </section>
    </div>
  );
}

export default About;

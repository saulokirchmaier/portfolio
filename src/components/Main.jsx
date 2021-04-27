import React from 'react';
import './Main.css';
import desktop from '../img/jsdev.png'
// import desktop from '../img/desktop.svg';

function Home() {
  return (
    <main className="Main">
      <section>
        <h1>Olá!</h1>
        <h3>Bem vindo ao meu portifólio de projetos!</h3>
        <h3>Me chamo Saulo Kirchmaier Teixeira, e sou desenvolvedor Front-End Web, e futuro Full-Stack.</h3>
      </section>
      <img src={ desktop } alt="dev" />
    </main>
  );
}

export default Home;

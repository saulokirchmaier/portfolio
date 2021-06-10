import React from 'react';
import './Main.css';
import desktop from '../img/desktop.svg';
// import desktop from '../img/desktop.svg';

function Home() {
  return (
    <main className="Content Main">
      <h1>Hi!</h1>
      <h3>I'm Saulo, Front-End Web developer, and studing to be a Full-Stack.</h3>
      <img src={ desktop } alt="dev" />
    </main>
  );
}

export default Home;

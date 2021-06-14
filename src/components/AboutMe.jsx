import React from 'react';
import SKLogo from '../img/SK-logo-final.png';
import './AboutMe.css'; 
 
function AboutMe() {
  return (
    <div className="Content AboutMe">
      <h1>Quem sou eu!</h1>
      <img src={ SKLogo } alt="Saulo Kirchmaier" className="logo-image" />
      <h2>Saulo Kirchmaier Teixeira</h2>
      <p>Desenvolvedor Web Full-Stack em formação pela <a href="https://www.betrybe.com/" target="_blanck" className="trybe">Trybe</a>, sempre busco caminhos que agregam valor a mim e as pessoas ao meu redor, e que ajudam a mudar a forma que enchergamos o mundo. Quero contribir para o desenvolvimento de sistemas que transformem o dia-dia das pessoas.</p>
    </div>
  );
}

export default AboutMe;

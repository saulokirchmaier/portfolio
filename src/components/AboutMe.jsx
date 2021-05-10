import React from 'react';
import sauloImg from '../img/sauloimg.jpeg';
import './AboutMe.css'; 
 
function AboutMe() {
  return (
    <div className="Content AboutMe">
      <h1>Quem sou eu!</h1>
      <img src={ sauloImg } alt="Saulo Kirchmaier" className="profile-image" />
      <h2>Saulo Kirchmaier Teixeira</h2>
      <p>Desenvolvedor Web Full-Stack em formação pela <a href="https://www.betrybe.com/" target="_blanck">Trybe</a>, sempre busco caminhos que agregem valor a mim e as pessoas ao meu redor, e que ajudem a mudar a forma que enchergamos o mundo. Quero contribir para o desenvolvimento de sistemas que transformem o dia-dia das pessoas.</p>
    </div>
  );
}

export default AboutMe;

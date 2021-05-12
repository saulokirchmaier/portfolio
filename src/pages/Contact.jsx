import React from 'react';
import Header from '../components/Header';
import contact from '../img/contact.svg';
import linkedin from '../img/linkedin.svg';
import github from '../img/github.png';
import gmail from '../img/gmail.png';
import whatsapp from '../img/whatsapp.png';

function About() {
  return (
    <div className="App">
      <Header />
      <section className="Content Contact">
        <h1>Contatc me!</h1> 
        <div className="container">
          <p>Obrigado por chegar até aqui. Se você gostou do que encontrou e quer conhecer um pouco mais sobre mim, e meus trabalhos me encontre nas redes socias ou mande um email para <strong>saulokirchmaier@gmail.com</strong>.</p>
          <div className="social-network">
            <a href="https://github.com/saulokirchmaier" target="_blanck" rel="noreferer">
              <img src={ github } alt="github" className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/saulokirchmaier/" target="_blanck" rel="noreferer">
              <img src={ linkedin } alt="linkedin" className="icon"/>
            </a>
            <a href='https://api.whatsapp.com/send?phone=5537988021320&text=Ol%C3%A1%20Saulo!%20Vi%20seu%20portf%C3%B3lio...' target="_blanck" rel="noreferer">
              <img src={ whatsapp } alt="whatsapp" className="icon"/>
            </a>
            <a href="mailto:saulokirchmaier@gmail.com">
              <img src={ gmail } alt="gmail" className="icon"/>
            </a>
          </div>
        </div>
        <img src={ contact } alt="contact"/>
      </section>
    </div>
  );
}

export default About;

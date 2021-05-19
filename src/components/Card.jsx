import React from 'react';
import './Cards.css';

function Card({ project: { title, desciption, technologies, url, thumbnail } }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={ thumbnail } alt={ title } />
          <h4>{ title }</h4>
        </div>
        <a
          href={ url }
          target="_blank"
          rel="noreferrer"
        >
          <div className="flip-card-back">
              <h4>{ title }</h4>
              <p>{ desciption }</p>
              <h5>Tecnologias</h5>
              <p>{technologies.map((item) => `${item} `) }</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;

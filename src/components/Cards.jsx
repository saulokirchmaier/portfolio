import React from 'react';
import Card from './Card';
import './Cards.css';

function Cards({ data: { type, projects } }) {
  return (
    <div>
      <h3>{ type }</h3>
      <div className="cards">
        {projects.map((project) => <Card project={ project } key={ project.title } />)}
      </div>
    </div>
  );
}

export default Cards;

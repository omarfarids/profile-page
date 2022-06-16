import React from 'react';
import Nav from './Nav';
import Project from './Project';
import projectData from './projectData';

function Portfolio() {
  return (
    <main>
      <Nav/>
      <h2>Portfolio</h2>
      <div className='portfolio-page'>
          {
            projectData.map( data => {
              return <Project key={data.id} {...data}/>
            })
          }
      </div>
    </main>
  )
}

export default Portfolio;
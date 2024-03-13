import React from 'react';
import './Twelve.css';
import data from '../content.json';

function Twelve() {
    return (
      <main className="for-card12">
        <section>  
        <div className="header">
          <h2>Scientific Software Engineering Center Showcase</h2>
          <h3>The Scientific Software Engineering (SSE) Center at Georgia Tech is a new effort that is part of the  Virtual Institute for Scientific Software (VISS). VISS was launched by Schmidt Futures to address the need for training and educating software engineers, and the SSE center at Georgia Tech is focused on developing new methodologies for improving high-performance scientific codes and for training tomorrow’s software engineers.</h3>
          </div>
        </section>
      {data.map((item) => (
        <section>
          <div className="image-container">
            <img src={item.cover} alt={item.title} />
          </div>
          <div className="text">
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            {item.takeaways.map((takeaway) => (
                <p>{takeaway}</p>
              ))}
          </div>
        </section>
      ))}
      </main>
    ) 
}

export default Twelve;
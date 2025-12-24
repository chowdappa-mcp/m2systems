import React from 'react';

const Home: React.FC = () => {
  return (
    <section>
      <div className="card">
        <div className="h1">M2 Systems</div>
        <div className="lead">Welcome to the M2 Systems homepage. This demo shows a simple vertical tab layout using React, TypeScript, HTML5 and CSS3.</div>

        <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginTop: 12}}>
          <div className="card" style={{padding:12}}>
            <strong>Mission</strong>
            <p className="small">Deliver reliable, maintainable software solutions with human-centered design.</p>
          </div>
          <div className="card" style={{padding:12}}>
            <strong>Services</strong>
            <p className="small">Web development, system integration, cloud deployments and support.</p>
          </div>
          <div className="card" style={{padding:12}}>
            <strong>Values</strong>
            <p className="small">Quality, transparency and collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

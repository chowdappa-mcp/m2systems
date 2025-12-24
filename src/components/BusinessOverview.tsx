import React from 'react';

const BusinessOverview: React.FC = () => {
  return (
    <section>
      <div className="card">
        <div className="h1">Business Overview</div>
        <div className="lead">A quick snapshot of what M2 Systems offers.</div>

        <h3 style={{marginTop: 12}}>Core Capabilities</h3>
        <ul style={{marginLeft: 18}}>
          <li>Custom web & application development</li>
          <li>Cloud architecture and migrations</li>
          <li>DevOps, CI/CD pipelines and automation</li>
          <li>Maintenance & support</li>
        </ul>

        <h3 style={{marginTop: 12}}>Approach</h3>
        <p className="small">We focus on iterative delivery, clear communication, and measurable outcomes. Projects typically begin with a discovery phase and move through cycles of design, build and validation.</p>
      </div>
    </section>
  );
};

export default BusinessOverview;

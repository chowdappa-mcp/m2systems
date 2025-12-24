import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const tabs = [
    { to: '/', label: 'Home' },
    { to: '/business', label: 'Business Overview' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="brand" role="banner">
        <div className="logo">M2</div>
        <div>
          <div style={{fontSize: '0.9rem', opacity: 0.95}}>M2 Systems</div>
          <div className="small" style={{marginTop: '4px'}}>CRA + TypeScript demo</div>
        </div>
      </div>

      <nav className="nav" role="navigation" aria-label="Sidebar">
        {tabs.map(t => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.to === '/'}
            className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
          >
            {t.label}
          </NavLink>
        ))}
      </nav>

      <div style={{marginTop: 'auto'}} className="small">© {new Date().getFullYear()} M2 Systems</div>
    </aside>
  );
};

export default Sidebar;

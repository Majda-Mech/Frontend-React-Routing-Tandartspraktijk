import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li>Home</li>
          <li>Gaatjes</li>
          <li>Afspraak maken</li>
          <li>Tanden bleken</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
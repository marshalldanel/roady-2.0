import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const whiteclass = 'has-text-white-bis';
    const whiteclasslogo = `logo-text navbar-item ${whiteclass}`;

    return (
      <header>
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <a href="/" className={whiteclasslogo}>RoadieSounds</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a
                role="menuitem"
                tabIndex="0"
                type="button"
                href="/"
              >
                <span className={whiteclass}>Connect Spotify</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;

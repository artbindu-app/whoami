import React, { useState, useEffect } from 'react';
import config from '../../config/config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <header>
      <div className="profile-page sidebar-collapse">
        <nav className={`navbar navbar-expand-lg fixed-top navbar-transparent ${isScrolled ? 'bg-primary' : 'bg-primary-static'}`}>
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#top" rel="tooltip">
                <img padding="1px" src="./images/profile/artbindu_ico.png" height="50px" alt="logo" />
              </a>
              <button 
                className="navbar-toggler navbar-toggler" 
                type="button" 
                onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div className={`collapse navbar-collapse justify-content-end ${isNavCollapsed ? '' : 'show'}`} id="navigation">
              <ul className="navbar-nav">
                {config.navItems.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a className="nav-link smooth-scroll" href={`#${item.id}`} onClick={handleNavClick}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

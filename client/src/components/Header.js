import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      Stream App
    </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Tous les streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
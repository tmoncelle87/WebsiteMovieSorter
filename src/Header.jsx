import React from 'react';
import NavigationalLinks from './NavigationalLinks';
import './Header.css';
const Header = () => {
    return (
        <header className="site-header">
          
            <h1>Movie Sorter Website <br/> Developed By Tony</h1>
            <NavigationalLinks />
        </header>
    );
};

export default Header;

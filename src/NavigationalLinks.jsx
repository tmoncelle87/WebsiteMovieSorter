import React from 'react';
import Header from './Header';
import './Header.css'




const NavigationalLinks = () => {


    return (

        <nav>
      
          <ul>
        <li><a href="/" className="disabled-link">Links</a></li>   
                <li><a href="/">Home</a></li>
                <li><a href="/Guide">Guide</a></li>
                <li><a href="/Movies">Movies</a></li>


  
      </ul>
    </nav>
  );
};

export default NavigationalLinks;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Header.css'
import './NavigationalLinks.css'
import './Buttons.css'
import './Guide.css'
import Guide from './Guide';
import React, { useState } from 'react';

import Header from './Header';
import NavigationalLinks from './NavigationalLinks.jsx';

const App = () => {
    
};
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <Header />
            <App />
            <Guide />
        </StrictMode>,
    )




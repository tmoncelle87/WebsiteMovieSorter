import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Header.css'
import './NavigationalLinks.css'
import './Buttons.css'
import './Guide.css'
import Guide from './Guide';
import Buttons from './Buttons.jsx';
import Header from './Header';
import NavigationalLinks from './NavigationalLinks.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <Header /> */}
        {/* <Buttons /> */}
        <Guide />
    </StrictMode>,
)

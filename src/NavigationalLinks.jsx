import React, { useState } from 'react';
import './Header.css';
import './LoginScreen.css';
import './MoviesScreen.css';

const NavigationalLinks = () => {
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (popupName) => {
        setActivePopup(popupName);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    return (
        <>
            <nav>
                <ul>
                 
                    <li onClick={() => openPopup('login')}>Login</li>
       
                    <li onClick={() => openPopup('Movies')}>Movies</li>
                </ul>
            </nav>

            {activePopup === 'login' && (
                <div className="Login-Popup">
                    <div className="Login-Popup-Content">
                        <h2>Login</h2>
                        <h4>Enter Your Username</h4>
                        <input type="text" placeholder="Username" />
                        <h4>Enter Your Password</h4>
                        <input type="password" placeholder="Password" />

                        <div className="Login-Button-Wrapper">
                            <button >Login</button>
                        </div>
                        <div className="Close-Button-Wrapper">


                            <button onClick={closePopup}>Close</button>
                        </div>

                    </div>
                </div>
            )}

            {activePopup === 'Movies' && (
                <div className="Movies-Popup">
                    <div className="Movies-Popup-Content">
                        <h2>Sorted Movie List</h2>
                        <div className="MovieList">
                            
                        </div>

                        <div className="Movie-List-Box">
                            {[...Array(10)].map((_, i) => (
                                <div key={i}>Movie Item {i + 1}</div>
                            ))}
                        </div>

                        <div className="Login-Button-Wrapper">
                            <button onClick={closePopup}>Close</button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default NavigationalLinks;

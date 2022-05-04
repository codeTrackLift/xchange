import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';

import { App } from './components/App';
import { UserContext, CurrentUser } from './context/context';
import { guestUser } from './components/helpers/guestUser';

import './styles/global.css';
import './styles/typography.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <UserContext.Provider value={JSON.parse(localStorage.getItem('xchange')) || guestUser}>
                <CurrentUser.Provider value={JSON.parse(sessionStorage.getItem('xChangeCurrentUser')) || null}>
                    <App />
                </CurrentUser.Provider>
            </UserContext.Provider>
        </HashRouter>
    </React.StrictMode>
);
import { useContext, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

import { MyNavbar } from './MyNavbar';
import { Header } from './Header';
import { Home } from './Home';
import { CreateAccount } from './Account';
import { Deposit } from './Deposit';
import { Withdraw } from './Withdraw';
import { UserData } from './UserData';
import { Footer } from './Footer';

import { CurrentUser, UserContext } from '../context/context';

export const App = () => {
    const ctx = useContext(UserContext);
    const currentUser = useContext(CurrentUser);
    const [user, setUser] = useState(currentUser);
    const [title, setTitle] = useState('Home | MIT xCHANGE Bank');

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    useEffect(() => {
        sessionStorage.setItem('xChangeCurrentUser', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>

            <MyNavbar />

            <Header 
                user={user}
                setUser={setUser}
                setTitle={setTitle}
            />

            <ScrollToTop />

            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/account" 
                        element={<CreateAccount 
                        ctx={ctx}
                        user={user}
                        setUser={setUser}
                    />} 
                />
                <Route path="/deposit" 
                        element={<Deposit
                        ctx={ctx}
                        user={user}
                    />} 
                />
                <Route path="/withdraw" 
                        element={<Withdraw
                        ctx={ctx}
                        user={user}
                    />} 
                />
                <Route path="/userdata" 
                        element={<UserData
                        ctx={ctx}
                        setUser={setUser}
                    />} 
                 />
            </Routes>

            <Footer />

        </div>
    );
}
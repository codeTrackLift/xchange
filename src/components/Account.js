import React from 'react'
import { useLocation } from 'react-router-dom';

import { CurrentUser } from './partials/CurrentUser';
import { Create } from './partials/Create';
import { LogIn } from './partials/LogIn';
import { clearScrollMagic } from './helpers/scrollMagic';
import { capitalize } from './helpers/capitalize';

import cartoonMoney from '../images/cartoonMoney.png';

import '../styles/account.css';

const sectionStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
}

const articleStyle = {
    margin: '3rem auto',
    padding: '0 0.5rem',
    maxWidth: '960px',
}

const moneyStyle = {
    width: '30%',
    maxWidth: '10rem',
    margin: '2rem auto -3rem 10vw',
}

export const CreateAccount = ({ctx, user, setUser}) => {
    const { pathname } = useLocation();

    const clearHomeActive = () => {
        const home = document.getElementById('homeNavLink');
        const deposit = document.getElementById('depositNavLink');
        const withdraw = document.getElementById('withdrawNavLink');
        const userData = document.getElementById('userDataNavLink');
        home.classList.remove('active');
        deposit.classList.remove('active');
        withdraw.classList.remove('active');
        userData.classList.remove('active');
    }
    setTimeout(clearHomeActive, 50);

    clearScrollMagic();

    const logOut = () => {
        const userName = capitalize(user.split(', Account Number: ')[0]);
        alert(`LOGGING OUT\n\n${userName}, you have been logged out.\n\nPlease visit the xCHANGE again!`);
        setUser(null);
        sessionStorage.removeItem('xChangeCurrentUser');
    } 

    return (
        <section style={sectionStyle}>
            
            <div className='text-end'>
                {
                    (pathname === '/account/' && user) && 
                    <CurrentUser user={user} logOut={logOut}/>
                }
            </div>

            <div style={articleStyle}>
                <h6><span className='fw-bolder textShadowWhite dropShadow'><span style={{letterSpacing: '-0,5px'}}>M<span className='mitMaroon'>I</span>T</span> | xCHANGE</span> is for demo purposes only, <span id='doNot' className='mitMaroon'>DO NOT</span> use your real login credentials.</h6>
                <img src={cartoonMoney} alt='cartoon money' style={moneyStyle} className='imgHover' />
                <p className='text-end'>This means you, Mom and Dad!</p>
            </div>

            <Create ctx={ctx} setUser={setUser} />
            <LogIn setUser={setUser} ctx={ctx} />

        </section>
    )
}
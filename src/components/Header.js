import { useLocation } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { Exchange } from './Exchange';
import { CurrentUser } from './partials/CurrentUser';
import { initScrollMagicHeader } from './helpers/scrollMagic';
import { capitalize } from './helpers/capitalize';

import xChange from '../images/xChange.gif';
import mit from '../images/mit.jpg';
import bankIcon from '../images/bankIcon.png';
import mobileBanking from '../images/mobileBanking.png';
import mitLogo from '../images/mit-logo.png'

import '../styles/header.css';

const headerStyle = {
    marginInline: 'auto',
    maxWidth: '1400px',
}

const xChangeImgStyle = {
    zIndex: '99',
    paddingTop: '0.25rem',
    width: '40vw',
    maxWidth: '35rem',
    WebkitFilter: 'drop-shadow(2px 2px 2px white)',
    filter: 'drop-shadow(2px 2px 2px white)',
}

const heroStyle = {
    zIndex: '8',
    backgroundColor: '#990033',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    backgroundImage: 'url(' + mit + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30rem',
    borderBottom: '0.5rem solid #990033',
}

const heroSideImgStyleLeft = {
    zIndex: '10',
    minWidth: '4rem',
    WebkitFilter: 'drop-shadow(1px 1px 1px black)',
    filter: 'drop-shadow(1px 1px 1px black)',
    marginRight: '-2rem',
}

const heroSideImgStyleRight = {
    zIndex: '10',
    minWidth: '4rem',
    marginLeft: '-2rem',
    WebkitFilter: 'drop-shadow(2px 2px 2px white)',
    filter: 'drop-shadow(2px 2px 2px white)',
}

const rowStyle = {
    alignItems: 'center',
    height: '30rem',
}

const redStyle ={    
    zIndex: '1',
    backgroundColor: '#990033',
    opacity: 0.3,
    marginTop: '-35rem',
}

const mitLogoStyle = {
    height: '2rem',
    marginRight: '0.5rem',
    marginBottom: '0.25rem',
    WebkitFilter: 'drop-shadow(2px 2px 2px black)',
    filter: 'drop-shadow(2px 2px 2px black)',
}

const h1Style = {
    color: 'black',
    fontSize: '2.5rem',
    fontWeight: 'bolder',
    textShadow: '1px 1px 1px black',
    padding: '1.25rem 0.5rem 1.25rem 0',
    fontVariant: 'small-caps',
}

const h2Style = {
    zIndex: '10',
    textShadow: '1px 1px 1px black',
    fontSize: '2rem',    
    fontVariant: 'small-caps',
}

export const Header = ({ user, setUser, setTitle}) => {

    const { pathname } = useLocation();
    const renderTitle = () => {
        switch(pathname) {
            case '/':
                return 'Home Page';
            case '/account/':
                return 'Accounts';
            case '/deposit/':
                return 'Deposits';
            case '/withdraw/':
                return 'Withdrawals';
            case '/userdata/':
                return 'User Data';
            default:
                return '';
        }
    }

    const logOut = () => {
        const userName = capitalize(user.split(', Account Number: ')[0]);
        alert(`LOGGING OUT\n\n${userName}, you have been logged out.\n\nPlease visit the xCHANGE again!`);
        setUser(null);
        sessionStorage.removeItem('xChangeCurrentUser');
    } 

    setTimeout(initScrollMagicHeader,50);

    return (
        <header
            style={headerStyle}
            className='text-end'>

            <img
                src={xChange}
                alt='MIT xChange Logo'
                className='img-fluid imgHover'
                style={xChangeImgStyle}
            />

            <div style={heroStyle}>

                <h1 style={h1Style}>T<span style={{color:'#990033'}}>h</span>e <span className='dropShadow text-white'>Future</span> of <span className='dropShadow text-white'>Currency</span></h1>


                <Row
                    className='mx-auto w-100 d-flex justify-content-center my-5'
                    style={rowStyle}
                >
                    <img
                        id='heroLeft'
                        src={mobileBanking}        
                        alt='Cash Deposit cartoon'
                        className='img-fluid col-2 my-auto'
                        style={heroSideImgStyleLeft}
                    />

                    <h2 id='heroText'
                        style={h2Style}
                        className='text-center text-white col-8'
                    >
                        <img src={mitLogo} alt='MIT xPRO logo' style={mitLogoStyle} />|
                        <span className='fw-bolder' style={{fontVariant:'normal'}}> xPRO </span>
                        <span className='text-black dropShadowWhite'>B
                        <span style={{color:'#990033'}}>a</span>dBank </span>
                        <span className='fw-bolder'>Project</span>
                        <hr />
                        <span className='mitMaroon textShadow dropShadow fs-3'>{renderTitle()}</span>
                    </h2>

                    <img
                        id='heroRight'
                        src={bankIcon}
                        alt='Mobile Banking cartoon'
                        className='img-fluid col-2 my-auto'
                        style={heroSideImgStyleRight}
                    />
                    <div id='redRow' style={redStyle}></div>
                </Row>
            </div>

            <Exchange />
            
            {
                pathname !== '/account/' && 
                <CurrentUser user={user} logOut={logOut} setTitle={setTitle}/>
            }

        </header>
    );
}
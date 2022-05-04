import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, OverlayTrigger, Popover } from 'react-bootstrap';

import '../styles/navbar.css';

const navTogglerStyle = {
    WebkitFilter: 'drop-shadow(1px 1px 1px white)',
    filter: 'drop-shadow(1px 1px 1px white)',
    border: '2px solid black !important',
    borderRadius: '2px !important',
    fontVariant: 'small-caps',
    letterSpacing: '-1px',
}

const spanStyle = {
    color: '#990033',
}

const PopoverStyle = {
    opacity: 0.9,
    borderRadius: '2px',
}

export const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState('Home | MIT xCHANGE Bank');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (

            <Navbar id='navbar'
                expanded={expanded}
                expand='md'
                className="navbar navbar-light sticky-top">
                <Navbar.Toggle 
                    className="navbar-toggler fw-bolder text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(expanded ? false : 'expanded')}
                    style={navTogglerStyle}
                >M<span style={spanStyle}>e</span>nu
                </Navbar.Toggle>
                <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <Nav className="navbar-nav me-auto mb-2 mb-lg-0" defaultActiveKey={1}>

                        <OverlayTrigger
                            placement={expanded ? 'right' : 'bottom'}
                            trigger={['hover', 'click']}
                            overlay={(
                            <Popover style={PopoverStyle}>
                                <h6 className='px-2'><span style={{fontVariant:'small-caps'}}>The Future of Currency</span><hr/><span className='fw-bolder'>MIT | xCHANGE</span><hr/>We have all the current currency <span className='fw-bolder'>xCHANGE</span> rates!</h6>
                            </Popover>
                        )}>
                            <Nav.Link eventKey={1} 
                                id='homeNavLink' 
                                onClick={() => {setExpanded(false); setTitle('Home | MIT xCHANGE Bank')}} 
                                href='/' 
                                as={NavLink} 
                                to='/'
                            ><span>H<span className='redLetter'>o</span>me</span>
                            </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement={expanded ? 'right' : 'bottom'}
                            trigger={['hover', 'click']}
                            overlay={(
                            <Popover style={PopoverStyle}>
                                <h6 className='px-2'>Create New Account<hr/>Access Existing Account<hr/>Entry Validation<hr/>Unique User Emails</h6>
                            </Popover>
                        )}>
                            <Nav.Link eventKey={2} 
                            id='accountNavLink' 
                            onClick={() => {setExpanded(false); setTitle('Account | MIT xCHANGE Bank')}} 
                            href='/account/' 
                            as={NavLink} 
                            to='/account/'
                            ><span>A<span className='redLetter'>c</span>count</span>
                            </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement={expanded ? 'right' : 'bottom'}
                            trigger={['hover', 'click']}
                            overlay={(
                            <Popover style={PopoverStyle}>
                                <h6 className='px-2'>Electronic Deposits<hr/>Transaction Notes<hr/>Updated Balance</h6>
                            </Popover>
                        )}>
                             <Nav.Link eventKey={3} 
                                id='depositNavLink' 
                                onClick={() => {setExpanded(false); setTitle('Deposit | MIT xCHANGE Bank')}}
                                href='/deposit/' 
                                as={NavLink} 
                                to='/deposit/'
                            ><span>D<span className='redLetter'>e</span>posit</span>
                            </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement={expanded ? 'right' : 'bottom'}
                            trigger={['hover', 'click']}
                            overlay={(
                            <Popover style={PopoverStyle}>
                                <h6 className='px-2'>Electronic Withdrawals<hr/>Transaction Notes<hr/>Updated Balance<hr/>Overdraft Protection</h6>
                            </Popover>
                        )}>
                            <Nav.Link eventKey={4} 
                                id='withdrawNavLink' 
                                onClick={() => {setExpanded(false); setTitle('Withdraw | MIT xCHANGE Bank')}}
                                href='/withdraw/' 
                                as={NavLink} 
                                to='/withdraw/'
                            ><span>W<span className='redLetter'>i</span>thdraw</span>
                            </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement={expanded ? 'right' : 'bottom'}
                            trigger={['hover', 'click']}
                            overlay={(
                            <Popover style={PopoverStyle}>
                                <h6 className='px-2'>Log In Credentials<hr/>Transaction History<hr/>Reset User Data</h6>
                            </Popover>
                        )}>
                             <Nav.Link eventKey={5} 
                                id='userDataNavLink' 
                                onClick={() => {setExpanded(false); setTitle('User Data | MIT xCHANGE Bank')}}
                                href='/userdata/' 
                                as={NavLink} 
                                to='/userdata/'
                            ><span>U<span className='redLetter'>s</span>er Data</span>
                            </Nav.Link>
                        </OverlayTrigger>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

         
    );
}
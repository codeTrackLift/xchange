import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const buttonStyle = {
    margin: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
}

export const CurrentUser = ({user, logOut, setTitle}) => {

    return (
        <>
            <div id='currentUser'>
                {
                    user ? ( 
                        <div><span className='fw-bolder'>Logged in as: </span>{user.split(', Account Number: ')[0]} <Button style={buttonStyle} onClick={() => logOut()}>Log Out</Button></div>
                    ) : (
                        <div className='d-flex container-fluid justify-content-end'><p className='my-auto'>Have an account?</p> 
                            <Nav.Link 
                                to='/account/' 
                                href='/account/' 
                                as={NavLink}
                                onClick={() => {setTitle('Account | MIT xCHANGE Bank')}}
                            >
                                <Button style={buttonStyle}>Login</Button>
                            </Nav.Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}
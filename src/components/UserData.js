import { Button, Card, Row } from 'react-bootstrap';

import { capitalize } from './helpers/capitalize';

const sectionStyle = {
    margin: '0 auto',
    maxWidth: '960px',
}

const resetStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    zIndex: 10,
}

const greetingStyle = {
    margin: '2rem auto 0 auto',
    width: '960px',
    maxWidth: '90vw',
}

const cardHeaderStyle = {
    backgroundColor: 'rgb(50,50,50)',
    margin: '0rem -0.55rem',
    color: 'white',
    textShadow: '1px 1px 1px black',
}

const cardStyle ={
    margin: '2rem auto',
    padding: '0 0.5rem',
    maxWidth: '90vw',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
}

export const UserData = ({ctx, setUser}) => {

    const clearHomeActive = () => {
        const home = document.getElementById('homeNavLink');
        home.classList.remove('active');
    }
    setTimeout(clearHomeActive, 50);

    const resetCookies = () => {
        setUser(null);
        localStorage.removeItem('xchange');
        alert('USER DATA RESET\n\nUser data has been reset, thank you for visiting!')
        window.location.reload(false);
    }

    return (
        <section style={sectionStyle}>

            <div style={greetingStyle}>
                <h6 className='text-center'><span className='fw-bolder textShadowWhite dropShadow px-1'><span style={{letterSpacing: '-0,5px'}}>M<span className='mitMaroon'>I</span>T</span> | xCHANGE</span> believes in <span className='fw-bolder textShadowWhite dropShadow px-1'>xCHANGING</span> everything... <span className='textSilver'>(including user data)</span></h6>
                <p className='text-center textSilver'>For demo purposes, user data is retained in local storage. Click below to reset.</p>
            </div>

            <Button 
                onClick={resetCookies} 
                className='mx-5'
                style={resetStyle}
            >Reset
            </Button>

            {ctx.users.map((user, i) => (
                <Card style={cardStyle} key={i}>
                    <Card.Header style={cardHeaderStyle}>
                        <Row>
                            <h6 className='col-sm-6 px-3 pt-1 fw-bolder'>User Name: <span className='fw-normal'>{capitalize(user.name)}</span></h6>
                            <h6 className='col-sm-6 px-3 pt-1 fw-bolder'>Account Number: <span className='fw-normal'>{user.id}</span></h6>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <p className='col-sm-6'><span className='fw-bolder'>Email:</span> {user.email}</p>
                            <p className='col-sm-6'><span className='fw-bolder'>Password:</span> {user.password}</p>
                        </Row>
                        <Row>
                            <p>
                                <span className='fw-bolder'>Balance: </span>
                                ${user.balance.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2})}
                            </p>
                        </Row>
                        <Row>
                            <p>
                                <span className='fw-bolder'>Transaction History: </span>
                            </p>
                            <ul>
                                {user.transactions.map((transaction, j) => (
                                    <li className='row' key={j}>
                                        <hr/>
                                        <div className='col-sm-4'><span className='fw-bolder'>Date: </span>{transaction[0]}</div>
                                        <div className='col-sm-4'><span className='fw-bolder'>Type: </span>{transaction[1]}</div>
                                        <div className='col-sm-4'><span className='fw-bolder'>Amount: </span>
                                            ${Number(transaction[2]).toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2})}
                                        </div>
                                        <p><span className='fw-bolder'>Notes:</span> {transaction[3]}</p>
                                    </li>
                                ))}
                            </ul>
                        </Row>
                    </Card.Body>
                </Card>
            ))}

        </section>
    )
}
import { useState } from 'react'
import { useFormik} from 'formik';

import { AccountCard } from './AccountCards';
import { capitalize } from '../helpers/capitalize';
import { newDate } from '../helpers/dateTime';
import { hash } from '../helpers/hash';

const errorStyle = {
    color: 'red'
}

export const Create = ({ctx, setUser}) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');

    function clearForm() {
        setShow(true);
    }

    const getUser = (email) => {
        return ctx.users.find(user => user.email === email);
    }

    const validate = values => {
        let errors = {};
        if(!values.nameField) {
            errors.name = 'is required*';
        } 
        if(!values.pswField) {
            errors.password = 'is required*';
        } 
        if(values.pswField.length < 8) {
            errors.password = '8 characters required*';
        } 
        if(values.pswField.includes(' ')) {
            errors.password = 'cannot have spaces*';
        } 
        if (getUser(values.emailField)) {
            errors.email = 'address already exists*';
        }
        if (!values.emailField) {
            errors.email = 'is required*';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            .test(values.emailField)) {
            errors.email = 'address is invalid*';
        }
        return errors;
    }

    const noteArray = [
        "Hope you're enjoying this demo! :)",
        'Let me know you visited...',
        "Don't forget to clear your cookies!",
        'myCodingJourney started in Dec 2021...',
        "stationInLife.replace( 'Pharmaceutical Engineer', 'Software Developer' );",
        "while(alive) { code(); track(macros); lift(weights); };",
        'Check out my portfolio... codebypete.com',
    ];
    const initialNote = () => {
        return noteArray[Math.random() * noteArray.length | 0];
    }

    const formik = useFormik({
        initialValues: {
            nameField: '',
            emailField: '',
            pswField: ''
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            let name = values.nameField.toLowerCase()
            let email = values.emailField.toLowerCase()
            const userName = capitalize(name);
            const id = hash(name, email);
            alert(`ACCOUNT SUCCESSFULLY CREATED\n\nWelcome to the xCHANGE, ${userName}.\n\nAccount ${id} has been created with a bonus deposit of $2,022.07!`);
            ctx.users.push({id:id,name:name,email:email,password:values.pswField,balance:2022.07,transactions:[[newDate(),'Deposit','2022.07',initialNote()]]});
            localStorage.setItem('xchange', JSON.stringify(ctx));
            setUser(`${userName}, Account Number: ${id}`);
            setShow(false);
            resetForm();
        }, 
    });

    return (       
        <AccountCard 
            header='Registration Form'
            status={status}
            body={show ? (
                <form>
                    <div>Name {formik.touched.nameField && formik.errors.name ? (
                    <span id='nameError' style={errorStyle}>{formik.errors.name}</span>
                    ) : null}</div>
                    <input 
                        id='nameField' 
                        type='name' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.nameField}
                        className='w-100'
                    />
                    <div>Email {formik.touched.emailField && formik.errors.email ? (
                        <span id='emailError' style={errorStyle}>{formik.errors.email}</span>
                        ) : null}</div>
                    <input 
                        id='emailField' 
                        type='email' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.emailField}
                        className='w-100'
                    />
                    <div>Password {formik.touched.pswField && formik.errors.password ? (
                        <span id='pswError' style={errorStyle}>{formik.errors.password}</span> 
                        ): null}</div>
                    <input 
                        id='pswField' 
                        type='password' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.pswField}
                        className='w-100'
                    />
                    <br/>
                    <button 
                        id='createButton'
                        type='submit' 
                        className='btn mt-4' 
                        onClick={formik.handleSubmit}
                        disabled={
                            !formik.values.emailField &&
                            !formik.values.nameField &&
                            !formik.values.pswField
                        }
                    >Create Account</button>
                </form>
            ):(
                <>
                    <h5>Success</h5>
                    <button 
                        id='createAnotherButton'
                        type='submit' 
                        className='btn' 
                        onClick={clearForm}
                    >Add another account</button>
                </>
            )}
        />
    )
}
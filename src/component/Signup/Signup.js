import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css'
import auth from '../../firebase.init';



const Signup = () => {
    // state declare start for input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // state declare End for input

    // create-email-password start

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    // create-email-password start

    // eventHandlerDeclare start for all input

    const handlerEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlerPasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handlerConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')

    }

    // eventHandlerDeclare End for all input

    // form Submit Start
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Plz match the Password');
            return;
        }

        if (password.length < 6) {
            setError('Password must be six character');
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

    // form Submit Start




    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handlerEmailBlur} type="email" name='email' required />

                    </div>

                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlerPasswordBlur} type="password" name='password' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handlerConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>

                <p>Already have an account? <Link className='form-link' to="/signup">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
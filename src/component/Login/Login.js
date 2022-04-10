import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlerEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlerPasswordBlur = event => {
        setPassword(event.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handlerUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/shop')
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handlerUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handlerEmailBlur} type="email" name='email' required />

                    </div>

                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlerPasswordBlur} type="password" name='password' required />

                    </div>

                    {/* Error start */}

                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

                    {/* Error End */}
                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;
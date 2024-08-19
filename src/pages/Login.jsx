import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            // console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder='Your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit' className='login-button'>Login</button>
                <br />
                <Link to='/signup'>Create An Account </Link>
            </form>
        </div>
    );
};

export default Login;
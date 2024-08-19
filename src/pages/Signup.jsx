import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password, displayName)
            // console.log(userCredential);
            updateProfile(auth.currentUser, { displayName })
            const user = userCredential.user;
            user.displayName = displayName;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Signup Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='Your Name' value={displayName} required onChange={(e) => setDisplayName(e.target.value)} />
                <br />
                <input type="email" placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder='Your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit' className='signup-button'>Signup</button>
                <br />
                <Link to='/login'>Login Your Account </Link>
            </form>
        </div>
    );
};

export default Signup;
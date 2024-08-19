import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/signup')

    }
    const usr = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <h2>Welcome <span style={{ color: 'lightgreen' }}>{usr.displayName}</span> to React Firebase Auth using email and password</h2>
            <button onClick={handleLogout}>Logout</button>
            {
                localStorage.user && <p> Hei {usr.email} Your successfull</p>

            }
        </div>
    );
};

export default Home;
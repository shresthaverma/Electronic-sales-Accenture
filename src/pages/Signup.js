import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import '../styles.css'; 

const Signup = () => {
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signup', userData);
            toast.success('Signup successful! You can now log in.'); 
            setUserData({ name: '', email: '', password: '' });
        } catch (error) {
            toast.error(error.response.data.message || 'Something went wrong'); 
        }
    };

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;

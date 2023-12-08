import React, { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Prepare the request body
        const requestBody = {
            email: email,
            password: password,
        };

        try {
            // Send the sign-up request to your server
            const response = await fetch('http://localhost:9090/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                // Handle successful sign-up (e.g., display success message)
                console.log('Sign-up successful!');
            } else {
                // Handle sign-up error (e.g., display error message)
                console.error('Sign-up failed');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;

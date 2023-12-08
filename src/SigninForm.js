import React, { useState } from 'react';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();

        // Prepare the request body
        const requestBody = {
            email: email,
            password: password,
        };

        try {
            // Send the sign-in request to your server
            const response = await fetch('http://localhost:9090/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                // Handle successful sign-in (e.g., redirect to another page)
                console.log('Sign-in successful!');
            } else {
                // Handle sign-in error (e.g., display error message)
                console.error('Sign-in failed');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <form onSubmit={handleSignIn}>
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
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
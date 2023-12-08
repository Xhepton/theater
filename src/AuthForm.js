import React, { useState } from 'react';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the request body
        const requestBody = {
            email: email,
            password: password,
        };

        try {
            // Send the authentication request to your server
            const endpoint = isSignUp
                ? 'http://localhost:9090/api/v1/auth/signup'
                : 'http://localhost:9090/api/v1/auth/signin';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                // Reset error state on success
                setError(null);
                // Handle successful authentication (e.g., display success message)
                console.log(isSignUp ? 'Sign-up successful!' : 'Sign-in successful!');
            } else if (response.status === 403) {
                // Handle 403 error (invalid credentials)
                setError('Invalid credentials');
            } else {
                // Handle other authentication errors
                setError(isSignUp ? 'Sign-up failed' : 'Sign-in failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    const toggleForm = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        // Reset error state when toggling forms
        setError(null);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </form>

            {error && <p>{error}</p>}

            <p>{isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}</p>
            <button onClick={toggleForm}>
                {isSignUp ? 'Sign In Instead' : 'Sign Up Instead'}
            </button>
        </div>
    );
};

export default AuthForm;

import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';




const Register = () => {
    const [loginData, setLoginData] = useState({})


    const { registerUser, error, isLoading, } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(value)
        setLoginData(newLoginData)
    }


    const handleLogin = e => {
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();

    }

    return (
        <div style={{ marginTop: '50px' }}>
            <Typography variant="h5" gutterBottom component="div">
                Please Register
            </Typography>
            {!isLoading && <form onSubmit={handleLogin}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    name="name"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label=" Your Name"
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label=" Your Email"
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-password-input"
                    onBlur={handleOnBlur}
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <Button
                    style={{ backgroundColor: 'goldenrod', width: '25%', marginBottom: 7, }}
                    type="submit"
                    variant="contained">Register</Button>
                <Typography variant="p" gutterBottom component="div"
                    sx={{ textAlign: 'center' }}>

                    Already Registered? Please<Link to="/login"><Button
                        style={{ backgroundColor: 'skyblue' }}
                        variant="contained">Login</Button>
                    </Link>
                </Typography>
            </form>}
            {
                isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

            {
                error && [

                    'danger',

                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>{error} </Alert>
                ))
            }

        </div >
    );
};

export default Register;
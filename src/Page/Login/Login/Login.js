
import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';




const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { LoginUser, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }



    const handleLogin = e => {
        LoginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }


    return (
        <div style={{ marginTop: '50px' }}>
            <Typography variant="h5" gutterBottom component="div">
                Login
            </Typography>


            {<form onSubmit={handleLogin}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    name="email"
                    onBlur={handleOnBlur}
                    id="standard-basic" label=" Your Email" variant="standard" />
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
                    sx={{ width: '75%', m: 1 }}
                    style={{ backgroundColor: 'goldenrod', margin: 2, width: '25%' }}
                    type="submit"
                    variant="contained">Login
                </Button>
                <br />
                <Typography variant="p" gutterBottom component="div"

                >
                    New User? Please
                    <Link to="/register">
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            style={{ backgroundColor: 'skyblue' }}
                            variant="contained">Register
                        </Button>
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
                    <Alert style={{ width: '50%', textAlign: 'center' }} key={idx} variant={variant}>{error} </Alert>
                ))
            }
        </div >
    );
};

export default Login;

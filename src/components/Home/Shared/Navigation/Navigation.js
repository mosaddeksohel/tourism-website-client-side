import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hook/useAuth';


const Navigation = () => {
    const { user, Logout } = useAuth();
    return (

        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/">BD Turism</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    <NavLink to="/explore">
                        <Button className="bg-black">Offers</Button>
                    </NavLink>

                    {
                        user.email ?

                            <Box>
                                <NavLink to="/addproducts">
                                    <Button className="bg-black">Add Products</Button>
                                </NavLink>
                                <NavLink to="/myorders">
                                    <Button className="bg-black">My Orders</Button>
                                </NavLink>
                                <NavLink to="/manageproducts">
                                    <Button className="bg-black">Manage Products</Button>
                                </NavLink>
                                <NavLink to="/manageorders">
                                    <Button className="bg-black">Manage Orders</Button>
                                </NavLink>
                                <Button className="bg-black" onClick={Logout}>Logout</Button>

                            </Box>
                            :
                            <Box>
                                <NavLink to="/register">
                                    <Button className="bg-black">Register</Button>
                                </NavLink>
                                <NavLink to="/login">
                                    <Button className="bg-black">Login</Button>
                                </NavLink>
                            </Box>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;
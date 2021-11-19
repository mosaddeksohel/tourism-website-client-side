import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hook/useAuth';
import { Typography } from '@material-ui/core';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `https://frozen-sands-28577.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setOrders(data))
    }, [])

    /* const handleDeleteOrder = id => {
        const url = `https://frozen-sands-28577.herokuapp.com/orders/${user.email}/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                 console.log(data)
                if (data.deletedCount) {
                    const remaining = orders.filter(orders => orders._id !== id);
                    setOrders(remaining)
                }
            })
    };*/
    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://frozen-sands-28577.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order cancel successfully')
                        const remain = orders.filter(order => order._id !== id)
                        setOrders(remain);
                    }

                })
        }

    }

    return (
        <div className="container">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '50%' }} aria-label="Ordered List">
                    <TableHead>
                        <Typography sx={{ textAlign: 'center' }}>
                            <h2> Offer Orders List</h2>
                        </Typography>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell sx={{ textAlign: 'center' }} align="right">Offer Name</TableCell>
                            <TableCell align="right">Duration</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell sx={{ textAlign: 'center' }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }} align="right">{row.orderName}</TableCell>
                                <TableCell align="right">{row.duration}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }} align="right">
                                    <Button onClick={() => cancelOrder(row._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default MyOrders;

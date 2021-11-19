import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hook/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BuyForm = ({ open, handleClose, product }) => {

    const { name, duration } = product;
    const { user } = useAuth();
    const intialOrderInfo = { customerName: user.displayName, email: user.email, phone: '', address: '' }
    const [orderInfo, setOrderInfo] = useState(intialOrderInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setOrderInfo(newInfo);
    }


    const handleBookSubmit = e => {
        // collect order
        const order = {
            ...orderInfo,
            duration,
            orderName: name
        }

        fetch('https://frozen-sands-28577.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('ordered Successfully');
                    handleClose();
                }
            })


        e.preventDefault();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleBookSubmit}>

                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={duration}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="customerName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="address"
                        onBlur={handleOnBlur}
                        defaultValue="Your Address"
                        size="small"
                    />
                    <Button type="submit" variant='contained'>Book</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BuyForm;
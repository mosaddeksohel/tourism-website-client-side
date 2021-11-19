import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BuyForm from '../BuyForm/BuyForm';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProducts] = useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch(`https://frozen-sands-28577.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
    }, [productId])


    return (
        <div>

            <h5>Booking Product Id: {productId}</h5>
            < div className='mx-auto' style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }} >
                <Card style={{ border: 'none' }}>
                    <Card.Img style={{ height: '230px' }} className="mb-0" variant="top" src={product.img} />
                    <Card.Body className='mt-0'>
                        <Card.Title >{product.name}</Card.Title>
                        <Card.Text>{product.description} </Card.Text>
                        <Card.Title>Duration: {product.duration} days</Card.Title>
                        <Button style={{ backgroundColor: 'goldenrod', width: '50%' }} onClick={handleOpen} variant='contained'>Book Now</Button>
                    </Card.Body>
                </Card>
            </div>

            {

                <BuyForm
                    product={product}
                    handleClose={handleClose}
                    open={open}
                ></BuyForm>
            }
        </div >


    );

}
export default Purchase;
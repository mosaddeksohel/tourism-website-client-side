import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {


    const { name, description, img, duration, _id } = product;
    return (
        <div>

            <div className="m-2">
                <Card style={{ border: 'none' }}>
                    <Card.Img style={{ height: '230px' }} className="mb-0" variant="top" src={img} />
                    <Card.Body className='mt-0'>
                        <Card.Title >{name}</Card.Title>
                        <Card.Text>{description} </Card.Text>
                        <Card.Title>Duration: {duration}days</Card.Title>
                        <Link to={`/purchase/${_id}`}><Button style={{ width: '100%', backgroundColor: 'goldenrod' }}>Book Now</Button></Link>
                    </Card.Body>
                </Card>
            </div>


        </div>
    );
};

export default Product;
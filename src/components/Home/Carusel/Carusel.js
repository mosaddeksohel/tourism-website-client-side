import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import image1 from '../../../image/img-1.jpg'
import image2 from '../../../image/paul-green-gOHfFgwyDNM-unsplash (1).jpg'
import image3 from '../../../image/img-3.jpg'
import { Link } from 'react-router-dom';

const Carusel = () => {
    return (

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 style={{ color: 'skyblue' }}>Let's travel to see the world</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5 style={{ color: 'skyblue' }}>We are ready to help you to enjoy the world.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel >

    );
};

export default Carusel;
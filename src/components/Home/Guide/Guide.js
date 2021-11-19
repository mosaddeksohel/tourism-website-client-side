import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import guide from './../../../image/tour-guide.jpg'
import './Guide.css'
const Guide = () => {
    return (
        <div className="container">
            <h2 className="mt-3">Turist Guide</h2>
            <Row>
                <Col md={6} className="mb-2">
                    <div>
                        <img src={guide} alt="" srcset="" />
                    </div>

                </Col>
                <Col md={6} className="mb-2">
                    <div className="mt-5" >
                        <h3>Join with us as a guide</h3>
                        <Button>Join with us</Button>
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default Guide;
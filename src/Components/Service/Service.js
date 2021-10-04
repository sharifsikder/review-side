import Button from 'react-bootstrap/Button'
import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {

    const{name, price, seat, instructor,date, img, type} =props.service
    return (
        
           <div className='service'>
           <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <h6>Instructor : {instructor}</h6>
            <h6>Type : {type}</h6>
            <h6>Seat : {seat}</h6>
            <h6> Date : {date}</h6>
            <h5>Price : {price}</h5>
            </Card.Text>
            <Button variant="primary">Enroll</Button>
            </Card.Body>
            </Card>
           </div>

        
    );
};

export default Service;
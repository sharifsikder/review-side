import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {

    const{name, price, seat, instructor,date, img, type} =props.service

    return (
        
           <div className='service'>
           <Card className="card" style={{ width: '23rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title className='card-tittle'>{name}</Card.Title>
            <Card.Text>
            <h5>Instructor : {instructor}</h5>
            <h6>Type : {type}</h6>
            <h6>Seat : {seat}</h6>
            <h6> Date : {date}</h6>
            <h3>Price : <span className='price'>{price}</span></h3>
            </Card.Text>
            <Button variant="outline-success">View More</Button>
            </Card.Body>
            </Card>
           </div>

        
    );
};

export default Service;
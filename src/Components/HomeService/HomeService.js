import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './HomeService.css'

const HomeService = (props) => {
    console.log(props.service)
    const{name, price, seat, instructor,date, img, type} =props.service
    return (
        
               <div className='service'>
           <Card style={{ width: '18rem' }}>
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
            <Button variant="outline-success">View More</Button>
            </Card.Body>
            </Card>
           </div>
    
    );
};

export default HomeService;
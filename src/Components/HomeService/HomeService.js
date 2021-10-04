import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './HomeService.css'

const HomeService = (props) => {
    console.log(props.service)
    const{name, price, seat, instructor,date, img, type} =props.service
    return (
        
               <div className='service'>
           <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title className='card-name'>{name}</Card.Title>
            <Card.Text>
            <h5>Instructor : {instructor}</h5>
            <h6>Type : {type}</h6>
            <h6>Seat : {seat}</h6>
           
            <h4>Price : <span className='prices'>{price}</span></h4>
            </Card.Text>
            <Button variant="outline-success">Enroll Now</Button>
            </Card.Body>
            </Card>
           </div>
    
    );
};

export default HomeService;
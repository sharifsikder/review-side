import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    return (
        <div className='form-container'>
            <h1>Contact Us </h1>

            <div>
            <Form>
  <Form.Group className="mb-3 w-50 mx-auto" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3 w-50 mx-auto" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Button variant="outline-warning" type="submit">
    Submit
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Contact;
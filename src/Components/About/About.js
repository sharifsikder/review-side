import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';
import  '../../images/about.jpg'

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-section">

              <div>
              <img src="../../images/about.jpg" alt =""/>
              </div>
              <div>
               <h3>Hello, I’m <span className="name">Stella Spring</span>. My course helps to become successful in life.</h3>

               <p>Nullam porta enim vel tellus commodo, eget laoreet odio ultrices. Etiam fringilla lobortis sapien sit amet cursus. Maecenas est orci, congue egestas lobortis vel, feugiat non tellus.</p>

               <div class="about-details">
                   <div>
                       <h2>155+</h2>
                       <h5>Happy Customers</h5>
                   </div>
                   <div>
                       <h2>97+</h2>
                       <h5>Efficienty</h5>
                   </div>
                   <div>
                       <h2>12</h2>
                       <h5>Years of Experience</h5>
                   </div>
               </div>

               <Button className="button">Read More</Button>

              </div>


            </div>
        </div>
    );
};

export default About;
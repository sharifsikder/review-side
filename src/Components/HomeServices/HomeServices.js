import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css'

const HomeServices = () => {
    const[services, setServices]= useState([]);
    useEffect(() => {
        fetch('./homeService.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='services-home'>
           <h1>Our Services</h1> 
           <div className='home-services'>
               {
                   services.map(service => <HomeService service={service}></HomeService>)
               }
           </div>
        </div>
    );
};

export default HomeServices;
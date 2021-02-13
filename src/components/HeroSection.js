import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Albin Ryberg</h1>
            <p>Web developer</p>

            <div className='hero-text'>
                <p>
                    Jag är 21 år, bor i Stockholmstrakten och studerar webbutveckling på yrkeshögskolan KYH.
                </p>
            </div>
            <div className='hero-btn'>
            <Link className='btn-link' to='/about'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    
                        More
                    
                </Button>
            </Link>
            </div>
        </div >
    );
}

export default HeroSection

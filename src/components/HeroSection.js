import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Albin Ryberg</h1>
            <p>Beginner web developer</p>
            <div className='circle'> picture of me should be here</div>
        </div>
    )
}

export default HeroSection

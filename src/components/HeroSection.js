import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/images/austronaut.jpg"></img>
            <h1>Albin Ryberg</h1>
            <p>Beginner web developer</p>
            <div hero-btns>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Find out MORE
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    cv <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

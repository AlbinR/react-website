import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            albin@rybergs.net
                        </Link>
                    </div>
                    <small className='website-owner'>Albin Ryberg © 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link github' to='/' target='_blank' aria-label='Github' >
                            <a href='https://github.com/AlbinR' target='_blank' rel="noreferrer"><i class="fab fa-github"></i></a>
                        </Link>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin' >
                            <i class="fab fa-linkedin"></i>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram' >
                            <i class="fab fa-instagram"></i>
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter' >
                            <i class="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Footer

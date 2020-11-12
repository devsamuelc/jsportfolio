import React from 'react';
import '../styles/components/navbar.css';

import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFreeCodeCamp } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div id='navbar'>
            <div className="nav-content">
                <ul className="buttons">
                    <Link to="/contact" style={{ textDecoration: 'none' }}><li>Contact</li></Link>
                    <Link to="/projects" style={{ textDecoration: 'none' }}><li>Portfolio</li></Link>
                </ul>
                <ul className="icons">
                    <li><a href="https://github.com/devsamuelc"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/samuel-lima-da-cruz-35985a1ab/"><FaLinkedinIn /></a></li>
                    <li><a href="https://www.freecodecamp.org/devsamuelc"><FaFreeCodeCamp /></a></li>
                </ul>
            </div>
            
            
        </div>
    )
}
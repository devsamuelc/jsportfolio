import React, { Component } from 'react';
import '../styles/global.css'
import '../styles/pages/contact.css';
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';


class Contact extends Component {
    render(){
        return(
            <div className="page-contact container">
                <div className="home"><Link to="/main" className="homeButton"><HiHome/></Link></div>
                <div className="info">
                    <h1>HOW DO I CONTACT YOU?</h1>
                    <p>You can call me/e-mail me on the following addresses:</p>
                    <p><span className="icon"><FaPhoneAlt /></span> +55 (55) 99116-6773</p>
                    <p><span className="icon"><FaMailBulk /></span> dev.samuellc@outlook.com</p>
                    <p>You can also message me on my LinkedIn</p>
                    <p>I'll make sure to send a response as quickly as possible.</p>
                </div>
                <p>I appreciate your interest!</p>
                

            </div>
        )
    }
}

export default Contact;
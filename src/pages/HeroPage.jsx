import React, { Component } from 'react';
import '../styles/global.css'
import '../styles/pages/heropage.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DarkLogo from '../images/logodark.png';

class HeroPage extends Component {
    render(){
        return(
            <div className="page-heropage container">
                <div className="image"><img src={DarkLogo} alt="logo"/></div>
                    <Link to="/main"><Button className="to-main"variant="dark" size="lg">Go to Website</Button></Link>
            </div>
        )
    }
}

export default HeroPage;
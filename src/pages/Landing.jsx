import React, { Component } from 'react';
import '../styles/global.css'
import '../styles/pages/landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div id="landing-page">
            <div className="content">
            <div className="description">
                <h1>Welcome to B.I.G.H</h1>
                <hr/>
                <p>I'm glad you're here, let me tell you a bit about me</p>
            
                    <p>I'm a self-taught front-end developer, former english teacher, coffee lover and gamer.</p>
                    <p>Here are some technologies that I use to build websites.</p>
                    <b><ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>    
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>node.js</li>
                        <li>Express</li>
                        <li>React.js</li>
                    </ul></b>
                    <p>I have also studied Java and C# for game developing purposes. But haven't gone far with it... yet.</p>
                    <p>Also, having my own - small - game development company in the future is another one of my aspirations, given that I've always been a gamer and love everything about it.</p>
            </div>  
            </div>
                
        </div>
    )
    }
    
}
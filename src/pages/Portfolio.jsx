import React, { Component } from 'react';
import data from '../data/data';
import Slide from '../Slide';
import '../styles/components/slideshow.css';
import { Button } from 'react-bootstrap';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

class Portfolio extends Component {

    constructor(props){
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex]
        })

    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render(){
        const {properties, property} = this.state;
        return(
            <div id="portfolio-page">
                <div className="home"><Link to="/main" className="homeButton"><HiHome/></Link></div>

                <div className="slides-slider">
                    <div className="slides-slider-wrapper">
                        <Slide property={property} />
                    </div>
                </div>

                <div className="button-group">
                    <Button onClick={() => this.prevProperty()} disabled={property.index === 0} variant="dark" size="lg">Prev</Button>
                    <Button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1} variant="dark" size="lg">Next</Button>
                </div>
                
            </div>
        );
    }
}

export default Portfolio;
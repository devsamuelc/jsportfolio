import healthpage from '../images/healthpage.jpg';
import bhaskara from '../images/bhask.jpg';
import candy from '../images/candy.jpg';
import ecomm from '../images/ecomm.jpg';

const data = {
    "properties": [
        {
            "index": 0,
            "name": "Health Blog",
            "image": `${healthpage}`,
            "description": "I built this website for a costumer who wanted to sell health related products. It's built on React."
        },
        {
            "index": 1,
            "name": "Candy Themed Website",
            "image": `${candy}`,
            "description": "This website was built on a design lesson I took, learned a bit about colors and element positioning. "
        },
        {
            "index": 2,
            "name": "Second Degree Function Calculator",
            "image": `${bhaskara}`,
            "description": "This was one of my first attempts of building a fully functional JavaScript app."
        },
        {
            "index": 3,
            "name": "E-Commerce Website",
            "image": `${ecomm}`,
            "description": "This app is complete with admin page, carts and .json databases."
        }
    ]
}

export default data;
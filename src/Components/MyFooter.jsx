import React, { Component } from 'react';
import './Myfooter.css'

class MyFooter extends Component {
    render() {
        return (
            <footer>
                <p className="text-white text-center"> {this.props.author}</p>
            </footer>
        );
    }
}

export default MyFooter;
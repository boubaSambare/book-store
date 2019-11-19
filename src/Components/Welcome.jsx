import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3"> LaFeltrinelli</h1>
                        <p className="lead">Welcome to your book store</p>
                    </Container>
            </Jumbotron>
            </div>
        );
    }
}

export default Welcome;
import React, { Component } from 'react';
import {Container, Row, Col}  from 'reactstrap'
import MyNav from './MyNav';
import MyFooter from './MyFooter'
import Welcome from './Welcome';
import LastRelease from './LastRelease';


class MainComponent extends Component {
    render() {
        return (
            <div>
                <MyNav></MyNav>
                <Container>
                    <Row>
                        <Col>
                         <Welcome></Welcome>
                        </Col>
                    </Row>
                    <LastRelease></LastRelease>
                </Container>
                <MyFooter author="Sambare Aboubacar"></MyFooter>
            </div>
        );
    }
}

export default MainComponent;
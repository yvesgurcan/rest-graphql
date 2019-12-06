import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Heading from '../components/Heading';
import BulletList from '../components/BulletList';
import Bullet from '../components/Bullet';
import Resource from '../components/Resource';

export default class Links extends Component {
    render() {
        return (
            <Container back="/">
                <Heading>Resources</Heading>
                <ul>
                    <Resource to="https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf">
                        Roy Fielding's PhD dissertation
                    </Resource>
                    <Resource to="https://blog.readme.io/the-history-of-rest-apis/">
                        The History of REST APIs
                    </Resource>
                    <Resource to="https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f">
                        What is REST — A Simple Explanation for Beginners, Part
                        1: Introduction
                    </Resource>
                    <Resource to="https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-2-rest-constraints-129a4b69a582?">
                        What is REST — A Simple Explanation for Beginners, Part
                        2: REST Constraints
                    </Resource>
                    <Resource to="https://www.restapitutorial.com/httpstatuscodes.html">
                        HTTP Status Codes
                    </Resource>
                </ul>
            </Container>
        );
    }
}

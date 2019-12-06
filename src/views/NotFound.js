// https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf

import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Heading from '../components/Heading';

export default class NotFound extends Component {
    render() {
        return (
            <Container back="/">
                <Heading>404</Heading>
                <Centered>Ironic.</Centered>
            </Container>
        );
    }
}

const Centered = styled.div`
    text-align: center;
`;

import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Heading from '../components/Heading';
import ReviewItem from '../components/ReviewItem';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Heading>REST review</Heading>
                <ul>
                    <ReviewItem to="/rest">What does REST mean?</ReviewItem>
                </ul>
            </Container>
        );
    }
}

const Heading = styled.h1``;

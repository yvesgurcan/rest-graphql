import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Heading from '../components/Heading';

const ANSWER = ['Representational', 'state', 'transfer'];

export default class Home extends Component {
    state = { hideText: ANSWER.map(_ => true) };

    onClick = index => {
        this.setState(prevState => {
            const updatedHideText = prevState.hideText.map((hide, i) => {
                if (i === index && hide === true) {
                    return !hide;
                }

                return hide;
            });
            return {
                hideText: updatedHideText
            };
        });
    };

    render() {
        return (
            <Container>
                <Heading>What does REST mean?</Heading>
                
            </Container>
        );
    }
}




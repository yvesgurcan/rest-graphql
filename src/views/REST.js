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
                <AnswerContainer>
                    {ANSWER.map((word, index) => (
                        <Blank
                            key={word}
                            hideText={this.state.hideText[index]}
                            onClick={() => this.onClick(index)}
                        >
                            {word}
                        </Blank>
                    ))}
                </AnswerContainer>
            </Container>
        );
    }
}


const AnswerContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 60px;
    flex-wrap: wrap;
`;

const Blank = styled.div(
    props => `
    padding-right: 10px;
    min-width: 200px;
    border-bottom: 6px solid black;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: color 1s linear;
    ${props.hideText ? 'color: transparent;' : null}
`
);

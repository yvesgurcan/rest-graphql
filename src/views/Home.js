import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Heading from '../components/Heading.js';
import Slide from '../components/Slide';

export default class Home extends Component {
    render() {
        return (
            <Container next="/rest/acronym">
                <Menu>
                    <Panel>
                        <Heading>REST</Heading>
                        <ul>
                            <Slide to="/rest/acronym">
                                What does REST stand for?
                            </Slide>
                            <Slide to="/rest/definition">Definition</Slide>
                            <Slide to="/rest/components">Components</Slide>
                            <Slide to="/rest/methods">Methods</Slide>
                        </ul>
                    </Panel>
                    <Panel>
                        <Heading>GraphQL</Heading>
                        <ul>
                            <Slide to="/graphql/definition">Definition</Slide>
                        </ul>
                    </Panel>
                    <Panel centered>
                        <Slide notListItem to="/links">
                            Links
                        </Slide>
                    </Panel>
                </Menu>
            </Container>
        );
    }
}

const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Panel = styled.div(
    props => `
    min-width: 50%;
    padding: 50px;
    ${props.centered ? 'text-align: center;' : null}
`
);

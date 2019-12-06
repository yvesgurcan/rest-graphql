import React, { Component } from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Bullet from '../../components/Bullet';
import ArrowDown from '../../components/ArrowDown';
import ArrowUp from '../../components/ArrowUp';
export default class Components extends Component {
    render() {
        return (
            <Container back="/rest/definition" next="/rest/methods">
                <Heading>REST components</Heading>
                <RESTComponent color="210, 0, 0">Client</RESTComponent>
                <Centered>
                    <ArrowDown index={1} />
                    <ArrowUp index={4} />
                </Centered>
                <RESTComponent color="30, 190, 30">Resource</RESTComponent>{' '}
                <Centered>
                    <ArrowDown index={2} />
                    <ArrowUp index={3} />
                </Centered>
                <RESTComponent color="90, 90, 230">API</RESTComponent>
                <BulletList>
                    <Bullet>Perform CRUD operations on resources.</Bullet>
                    <Bullet>Requests and responses.</Bullet>
                </BulletList>
            </Container>
        );
    }
}

const RESTComponent = styled.div(
    props => `
    background: rgb(${props.color});
    padding: 20px;
    margin: 10px;
    text-align: center;
    border: 1px solid black;
`
);

const Centered = styled.div`
    text-align: center;
`;

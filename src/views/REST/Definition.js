import React, { Component } from 'react';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Bullet from '../../components/Bullet';
import Resource from '../../components/Resource';
import FadeIn from '../../components/FadeIn';

export default class Definition extends Component {
    render() {
        return (
            <Container back="/rest/acronym" next="/rest/components">
                <Heading>What is REST?</Heading>
                <BulletList>
                    <Bullet index={1}>
                        Defined by Roy Fielding in{' '}
                        <Resource
                            notListItem
                            to="https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf"
                        >
                            his PhD dissertation
                        </Resource>{' '}
                        in 2000.
                    </Bullet>
                    <Bullet index={2}>
                        Guidelines on how to build your API{' '}
                        <small>(Application programming interface)</small>.
                    </Bullet>
                    <Bullet index={3}>
                        It's a design pattern, not a standard.
                    </Bullet>
                </BulletList>
            </Container>
        );
    }
}

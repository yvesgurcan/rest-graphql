import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const BREAKPOINT = '600px';

export default ({ children, back, next }) => (
    <Fragment>
        <Container>
            <div>{children}</div>
        </Container>
        {(back && <BackButton to={back}>Back</BackButton>) || <div />}
        {(next && <NextButton to={next}>Next</NextButton>) || <div />}
    </Fragment>
);

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
    font-size: 30px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Acme';
    margin: -8px;
    padding: 20px;
    padding-bottom: 60px;
`;

const FixedButton = styled(Button)`
    font-size: 26px;
    margin: 20px;
    display: block;
    text-align: center;
    @media only screen and (min-width: ${BREAKPOINT}) {
        position: fixed;
        bottom: 0;
    }
`;

const BackButton = styled(FixedButton)`
    @media only screen and (min-width: ${BREAKPOINT}) {
        left: 0;
    }
`;

const NextButton = styled(FixedButton)`
    @media only screen and (min-width: ${BREAKPOINT}) {
        right: 0;
    }
`;

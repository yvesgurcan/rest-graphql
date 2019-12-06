import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
    font-size: 30px;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    font-family: 'Acme';
`;

export default ({ children }) => (
    <Container>
        <div>{children}</div>
    </Container>
);

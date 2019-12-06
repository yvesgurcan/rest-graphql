import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
    text-decoration: none;
    color: steelblue;
`;

export default ({ to, children }) => (
    <li>
        <Link to={to}>{children}</Link>
    </li>
);

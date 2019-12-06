import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
    text-decoration: none;
    color: steelblue;

    &:hover {
        filter: grayscale(70%);
    }
`;

export default ({ to, children, notListItem }) =>
    notListItem ? (
        <Link to={to}>{children}</Link>
    ) : (
        <li>
            <Link to={to}>{children}</Link>
        </li>
    );

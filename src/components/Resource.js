import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: steelblue;

    &:hover {
        filter: grayscale(70%);
    }
`;

export default ({ to, children, notListItem }) =>
    notListItem ? (
        <Link href={to} target="_blank" noopener noreferer>
            {children}
        </Link>
    ) : (
        <li>
            <Link href={to} target="_blank" noopener noreferer>
                {children}
            </Link>
        </li>
    );

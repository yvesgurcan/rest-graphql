import styled from 'styled-components';

export default styled.span(
    props => `
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    opacity: 0;
    animation: fadeIn
        ${1 + !!(props.index - 1) * 1}s
        forwards ${props.index * 1}s;
`
);

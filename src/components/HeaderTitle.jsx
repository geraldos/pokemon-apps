import styled from '@emotion/styled';

const H1 = styled.h1`
    font-size: ${props => props.size};
    font-weight: bold;
    text-align: center;
`;

function HeaderTitle(props) {
    return (
        <H1 size={props.size}>{props.name}</H1>
    );
};

export default HeaderTitle;
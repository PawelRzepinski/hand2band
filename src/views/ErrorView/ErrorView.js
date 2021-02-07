import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const StyledLink = styled(Link)`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        text-decoration: none;
    }
`;

const ErrorView = () => (
    <StyledWrapper>
        <h1>Something went wrong</h1>
        <StyledLink to={'/'}>Back to home page</StyledLink>
    </StyledWrapper>
)

export default ErrorView;
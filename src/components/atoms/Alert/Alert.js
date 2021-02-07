import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from "prop-types";


const StyledWrapper = styled.div`
    width: fit-content;
    height: 100%;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.primary};
    padding: 3vw;
    margin: 0 auto;

    ${small => small && css`
        padding: 5px 10px;
        border-color: ${({ theme }) => theme.red};
        width: 100%;

        h2{
            color: ${({ theme }) => theme.red};
            font-size: 13px;
        }
    `}
`;

const StyledAlertText = styled.h2`
    color: ${({ theme }) => theme.black};
    text-align: center;

    span {
        color: ${({ theme }) => theme.primary};
        font-weight: 600;
    }
`;


const Alert = ({ searchTerm, alertText = "Not found: "}) => (
    <StyledWrapper>
        <StyledAlertText>{alertText}<span>{searchTerm}</span></StyledAlertText>
    </StyledWrapper>
)


Alert.propTypes = {
    searchTerm: PropTypes.string,
    alertText: PropTypes.string,
    small: PropTypes.bool
}


export default Alert;
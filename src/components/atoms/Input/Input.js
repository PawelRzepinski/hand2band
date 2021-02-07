import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


const StyledInput = styled.input`
    width: 100%;
    padding: 16px 32px 16px 42px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.black};

    &::placeholder {
        color: ${({ theme }) => theme.gray02};
    }
`;


const Input = ({ placeholder, onChange }) => (
    <StyledInput type={'text'} placeholder={placeholder} onChange={onChange} />
)

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}


export default Input;
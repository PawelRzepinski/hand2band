import styled from 'styled-components';


const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
    cursor: pointer;

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 2px;
        background-color: ${({ theme }) => theme.gray01};
    }

    &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;


export default Button;
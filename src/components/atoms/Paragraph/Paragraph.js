import styled from 'styled-components';


const Paragraph = styled.p`
    font-size: 15px;
    line-height: 1.2;
    color: ${({ theme }) => theme.black};
`;


export default Paragraph;
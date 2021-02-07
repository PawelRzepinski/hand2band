import React from 'react';
import styled, { css } from 'styled-components';
import Search from '../components/organisms/Search/Search';
import { connect } from 'react-redux';
import { H1 } from '../components/atoms/Headers/Headers';


const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
`;

const StyledContentWrapper = styled.section`
    padding: 30px;
    column-count: 3;
    column-gap: 10px;

    ${({ noCol }) => noCol && css`
        column-count: initial;
    `}
`;

const StyledSearchTerm = styled(H1)`
    text-align: center;
    margin-top: 10px;
    color: ${({ theme }) => theme.gray01};
`;


const ResultTemaplate = ({ children, noCol, searchTerm }) => (
    <div>
        <StyledHeader>
            <Search />
            <StyledSearchTerm>{searchTerm}</StyledSearchTerm>
        </StyledHeader>
        <StyledContentWrapper noCol={noCol}>
            { children }        
        </StyledContentWrapper>
    </div>
)


const mapStateToProps = (props) => ({ 
    searchTerm: props.searchTerm
})


export default connect(mapStateToProps)(ResultTemaplate);
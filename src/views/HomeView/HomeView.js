import React from "react";
import styled from "styled-components";
import Search from '../../components/organisms/Search/Search';
import background from '../../assets/background.jpg';
import { H1 } from '../../components/atoms/Headers/Headers';


const StyledWrapper = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
    width: 40%;
    min-width: 300px;
    color: ${({ theme }) => theme.gray01};
    margin-bottom: 30px;
`;


const HomeView = () => (
    <StyledWrapper>
      <StyledTextWrapper>
        <H1>Unsplash</H1>
        <p>Lorem ipsum dolor sit amet dolor sit amet.</p>
      </StyledTextWrapper>
      <Search />
    </StyledWrapper>
)

export default HomeView;
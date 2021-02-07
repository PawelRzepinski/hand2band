import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
`;


const Img = ({id, img, onClick}) => (
    <StyledImg key={id} src={img} onClick={onClick} />
)


Img.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Img;
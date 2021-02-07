import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import DetailInfo from '../../molecules/DetailInfo/DetailInfo';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../atoms/Button/Button';


const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
`;

const StyledModal = styled.div`
    position: relative;
    background-color: #fff;
    max-width: 80%;
    padding: 30px 15px;
    border-radius: 6px;
`;

const Img = styled.img`
    max-height: 80vh;
    max-width: 100%;
    object-fit: cover;
`;

const StyledHeader = styled.header`
    display: flex;
    padding: 20px 0 10px 0;
`;

const StyledCloseBtn = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Modal = ({ img, author, place, closeModal }) => (
    <StyledWrapper>
        <StyledModal>
            <StyledHeader>
                <DetailInfo text={place} icon={faMapMarkerAlt} />
                <DetailInfo text={author} icon={faUser} />
                <StyledCloseBtn onClick={closeModal}></StyledCloseBtn>
            </StyledHeader>
            <div>
                <Img src={img} />
            </div>
        </StyledModal>
    </StyledWrapper>
)

DetailInfo.propTypes = {
    img: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal;
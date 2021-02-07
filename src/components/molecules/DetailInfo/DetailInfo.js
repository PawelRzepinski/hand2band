import styled from 'styled-components';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from '../../atoms/Paragraph/Paragraph';


const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 16px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.primary};
    margin-right: 5px;
`;

const StyledText = styled(Paragraph)`
    font-size: 12px;
`;

const DetailInfo = ({ icon, text}) => (
    <StyledWrapper>
        <StyledIcon icon={icon} />
        <StyledText>{text === null ? "Unknown" : text}</StyledText>
    </StyledWrapper>
)


DetailInfo.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}

export default DetailInfo;
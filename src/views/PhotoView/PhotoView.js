import React from "react";
import { connect } from "react-redux";
import Alert from "../../components/atoms/Alert/Alert";
import ResultTemaplate from "../../template/ResultTemplate";
import Modal from "../../components/organisms/Modal/Modal";
import Img from '../../components/atoms/Img/Img';


class PhotoView extends React.Component {
    state = {
        isModalOpen: false,
        modalImg: '',
        author: '',
        place: '',
    }

    handleClick = (photo) => {
        this.setState({
            isModalOpen: true,
            modalImg: photo.urls.full,
            author: photo.user.name,
            place: photo.user.location
        })
    }

    closeModal = () => { this.setState({ isModalOpen: false }) }

    render() {
        const props = this.props;
        const { isModalOpen, modalImg, author, place } = this.state;

        if(props.photo.length === 0) {
            return (
                <ResultTemaplate noCol>
                    <Alert
                        searchTerm={props.searchTerm}
                        alertText={'No images found for: '}
                    />
                </ResultTemaplate>
            )
        }
        
    
        return (
            <ResultTemaplate>
                {isModalOpen && <Modal img={modalImg} author={author} place={place} closeModal={this.closeModal} />}
                {props.photo.map(photo => (
                    <Img key={photo.id} img={photo.urls.full} onClick={() => this.handleClick(photo)} />
                ))}
            </ResultTemaplate>
        )
    }
}


const mapStateToProps = (props) => ({ 
    photo: props.photo,
    searchTerm: props.searchTerm
})

export default connect(mapStateToProps)(PhotoView);
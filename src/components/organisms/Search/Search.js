import React from "react";
import styled from 'styled-components';
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updatePhoto, downloadKeywords } from '../../../actions/index';
import Input from '../../atoms/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Alert from "../../atoms/Alert/Alert";
const token = 'NTDrCDBI6Q212wzIpz9wJUy7G22U_AcqtWHlwm_gonM';


const StyledList = styled.ul`
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    min-height: 50px;
    list-style: none;
    padding: 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 0 5px rgb(0 0 0 / 10%);
`;

const StyledListElement = styled.li`
    padding: 5px;
    font-size: 13px;
    line-height: 1.1.%;
    cursor: pointer;
    
    &:hover {
        background-color: ${({ theme }) => theme.gray01};
    }
`;

const StyledSearchWrapper = styled.div`
    position: relative;
    width: 40%;
    min-width: 300px;
`;

const StyledForm = styled.form`
    position: relative;
    width: 100%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.primary};
`;


class Search extends React.Component {
    state = {
        list: false,
        redirect: false,
        flag: true,
        searchTerm: '',
        filteredKeywords: [],
        fetchError: false
    }

    componentDidMount() {
        axios
            .get(`https://api.unsplash.com/topics?page=2&per_page=10`, {
                headers: {
                    Authorization: `Client-ID ${token}`
                }
            })
            .then(res => {
                const keywords = res.data.map(item => item.title.toLowerCase())
                const { downloadKeywords } = this.props;
                downloadKeywords(keywords);
            })
            .catch(error => null)
    }

    filterKeywords = searchTerm => {
        const filteredKeywords = this.props.keywords.filter(keyword => keyword.indexOf(searchTerm) == 0);
        this.setState({ filteredKeywords: filteredKeywords })
    }

    handleInput = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        searchTerm.length >= 3 ? this.setState({ list: true }) : this.setState({ list: false });
        this.setState({ searchTerm })
        this.filterKeywords(searchTerm);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let searchTerm = this.state.searchTerm
        this.fetchItems(searchTerm);
        this.setState({ list: false })
    }

    fetchItems = (searchTerm) => {
        axios
            .get(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=${searchTerm}`, {
                headers: {
                    Authorization: `Client-ID ${token}`
                }
            })
            .then(res => {
                const { updatePhoto } = this.props;
                this.setState({ redirect: true });
                updatePhoto(res.data.results, searchTerm);
            })
            .catch(error => this.setState({fetchError: true}))
    }

    chooseLi = (keyword) => {
        this.setState({ 
            searchTerm: keyword,
            list: false
        });
        this.fetchItems(keyword)
    }

    render() {
        const { list, filteredKeywords } = this.state;
        if(this.state.redirect && this.state.flag) {
            this.setState({ flag: false })
            return <Redirect to='/photo' />;
        } else if (this.state.fetchError) {
            return <Redirect to='/error' />;
        }

        return (
            <StyledSearchWrapper>
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledIcon icon={faSearch} />
                    <Input type={'text'} placeholder={"Search photo"} onChange={this.handleInput} />                
                </StyledForm>
                {list && 
                    <StyledList>
                    {filteredKeywords.length > 0 ?
                    filteredKeywords.map(keyword => {
                        return (
                        <StyledListElement key={keyword} onClick={() => this.chooseLi(keyword)}>{keyword}</StyledListElement>
                    )}):
                        <Alert small alertText={"No words"} />
                    }
                </StyledList>}
            </StyledSearchWrapper>
        )
    }
}



Search.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

const mapDispatchToProps = dispatch => {
    return ({
        updatePhoto: (photo, searchTerm) => dispatch(updatePhoto(photo, searchTerm)),
        downloadKeywords: keywords => dispatch(downloadKeywords(keywords)),
    })
}

const mapStateToProps = props => {
    return ({
        keywords: props.keywords,
    }
)}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
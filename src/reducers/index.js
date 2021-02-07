import { FETCH_KEYWORDS, FETCH_SUCCESS } from '../actions';


const initialState = {
    photo: [],
    searchTerm: '',
    keywords: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                photo: action.payload.photo,
                searchTerm: action.payload.searchTerm,
            }

        case FETCH_KEYWORDS:
            return {
                ...state,
                keywords: action.payload.keywords,
            }

        default:
            return state
    }
};


export default rootReducer
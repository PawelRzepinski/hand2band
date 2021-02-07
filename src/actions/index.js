export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_KEYWORDS = 'FETCH_KEYWORDS';


export const updatePhoto = (photo, searchTerm) => {
    return {
        type: FETCH_SUCCESS,
        payload: {photo, searchTerm}
    }
}

export const downloadKeywords = keywords => {
    return {
        type: FETCH_KEYWORDS,
        payload: {keywords}
    }
}
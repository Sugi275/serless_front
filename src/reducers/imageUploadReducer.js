const initialState = {
    isUploading: false,
    preAuthURI: "",
    images: []
};

const imageUploadReducer = (state = initialState, action) => {
    if (action.type === 'IMAGE_PREVIEW') {
        return {
            ...state,
            images: action.payload.images
        };
    } else if (action.type === 'ADD_PRE_AUTH_URI') {
        return {
            ...state,
            preAuthURI: action.payload.preAuthURI
        };
    } else if (action.type === 'PREVIEW_CLEAR') {
        return {
            images: initialState
        };
    } else {
        return state;
    }
}

export default imageUploadReducer

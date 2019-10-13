const initialState = {
    images: [
        { id: 0, name: "initial", language: "python" }
    ]
};

const imagesReducer = (state = initialState, action) => {
    if (action.type === 'RELOAD_IMAGE') {
        return {
            images: action.payload.images
        };
    } else {
        return state;
    }
}

export default imagesReducer

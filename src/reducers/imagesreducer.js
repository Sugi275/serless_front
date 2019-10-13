const initialState = {
    images: [
        { id: 0, imagename: "initial", image_url: "https://initial" }
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

const initialState = {
    images: [
        { id: 0, imagename: "initial", image_url: "https://ascii.jp/elem/000/001/688/1688136/180605_FnProject_32_500x250_500x250.jpg" }
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

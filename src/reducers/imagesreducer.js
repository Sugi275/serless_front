const initialState = {
    images: [
        { id: 0, name: "initial", language: "python" }
    ]
};

const imagesReducer = (state = initialState, action) => {
    console.log("test")
    console.log(action)
    switch (action.Type) {
        case 'RELOAD_IMAGE':
            return {
                ...state,
                images: action.payload.images
            };
        default:
            return state;
    }
}

export default imagesReducer
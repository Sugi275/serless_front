const initialState = {
    images: []
};

function imagesReducer(state = initialState, action) {
    switch (action.Type) {
        case 'RELOAD_IMAGE':
            return {
                images: [action.images]
            };
        default:
            return state;
    }
}
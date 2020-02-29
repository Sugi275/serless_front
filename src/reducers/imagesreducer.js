const initialState = {
    images: [
        { id: 0, imagename: "initial", image_url: "https://objectstorage.ap-tokyo-1.oraclecloud.com/n/orasejapan/b/serverless_movie/o/89783130b95d3802.jpg" }
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

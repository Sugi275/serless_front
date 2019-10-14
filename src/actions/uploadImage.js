export const previewImage = (images) => ({
    type: 'IMAGE_PREVIEW',
    payload: {
        images
    }
})

export const addPreAuthURI = (preAuthURI) => ({
    type: 'ADD_PRE_AUTH_URI',
    payload: {
        preAuthURI
    }
})

export const previewClear = () => ({
    type: 'PREVIEW_CLEAR',
})
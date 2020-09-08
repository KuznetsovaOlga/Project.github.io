import axios from 'axios';

export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAIL = "GET_PHOTOS_FAIL";

export const getPhotos = () => {
    return dispatch => {
        dispatch(addPhotosRequest());

        axios({
            method: 'get',
            url: `https://api.pexels.com/v1/search?query=nature&per_page=80"`,
            headers:{Authorization:"563492ad6f9170000100000190b900612c0e41a281be655afc75973d"}
        })
        .then(response => {
            dispatch(addPhotosSuccess(response.data))
        })
        .catch(err => {
            dispatch(addPhotosError(err))
        })
    }
}

const addPhotosRequest = () => {
    return {
        type: 'GET_PHOTOS_REQUEST',
    }
};

const addPhotosSuccess = (photos) => {
    return {
        type: 'GET_PHOTOS_SUCCESS',
        payload: photos
    }
};

const addPhotosError = (err) => {
    return {
        type: 'GET_PHOTOS_FAIL',
        payload: err
    }
};


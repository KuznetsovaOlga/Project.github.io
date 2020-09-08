import axios from 'axios';

export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAIL = "GET_NEWS_FAIL";

export const getNews = () => {
    return dispatch => {
        dispatch(addPhotosRequest());

        axios({
            method: 'get',
            url: `http://newsapi.org/v2/top-headlines?country=no&apiKey=60ea0e2e8e454d83a839631a483743dc`,
        })
        .then(response => {
            dispatch(addPhotosSuccess(response.data.articles))
        })
        .catch(err => {
            dispatch(addPhotosError(err))
        })
    }
}

const addPhotosRequest = () => {
    return {
        type: 'GET_NEWS_REQUEST',
    }
};

const addPhotosSuccess = (news) => {
    return {
        type: 'GET_NEWS_SUCCESS',
        payload: news
    }
};

const addPhotosError = (err) => {
    return {
        type: 'GET_NEWS_FAIL',
        payload: err
    }
};


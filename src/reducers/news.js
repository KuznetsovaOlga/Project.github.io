import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAIL} from '../actions/NewsActions';

const initialState = {
    news:[],
    loading: false,
    error: null
}

export function newsReducer(state = initialState, action){

    switch (action.type) {

        case GET_NEWS_REQUEST:
            return { 
                ...state, 
                loading:true
            }

        case GET_NEWS_SUCCESS:
            return { 
                ...state, 
                loading: false,
                news: [...state.news, action.payload]  
            }

        case GET_NEWS_FAIL:
            return { 
                ...state, 
                error: action.payload.err, 
                loading: false 
            }

        default:
            return state
    }
}
import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL} from '../actions/PhotosActions';

const initialState = {
    photos:[],
    loading: false,
    error: null
}

export function photosReducer(state = initialState, action){
    
    switch (action.type) {

        case GET_PHOTOS_REQUEST:
            return { 
                ...state, 
                loading:true
            }

        case GET_PHOTOS_SUCCESS:
            return { 
                ...state, 
                loading: false,
                photos: [...state.photos, action.payload]  
            }

        case GET_PHOTOS_FAIL:
            return { 
                ...state, 
                error: action.payload.err, 
                loading: false 
            }

        default:
            return state
    }
}
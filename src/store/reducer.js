import { FETCH_DATA_FAILURE, 
         FETCH_DATA_REQUEST, 
         FETCH_DATA_SUCCESS, 
         GET_INFO_FAILURE, 
         GET_INFO_REQUEST,
         GET_INFO_SUCCESS} from "./actions/actions";

const initialState = {
    data:[],
    info:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state};
        case FETCH_DATA_SUCCESS:
            return {...state, data:action.value};
        case FETCH_DATA_FAILURE:
            return {...state};
        case GET_INFO_REQUEST:
            return {...state};
        case GET_INFO_SUCCESS:
            return {...state, info:action.info};
        case GET_INFO_FAILURE:
            return {...state};
        default :
            return state;
    };    
};

export default reducer;
import axios from '../../axios-base';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAILURE = 'GET_INFO_FAILURE';

export const fetchDataRequest = () => (
    {type:FETCH_DATA_REQUEST}
);
export const fetchDataSuccess = value => (
    {type:FETCH_DATA_SUCCESS, value}
);
export const fetchDataFailure = () => (
    {type:FETCH_DATA_FAILURE}
);

export const getInfoRequest = () => (
    {type:GET_INFO_REQUEST}
);
export const getInfoSuccess = info => (
    {type: GET_INFO_SUCCESS, info}
);
export const getInfoFailure = () => (
    {type: GET_INFO_FAILURE}
);


export const fetchData = (e) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get('/search/shows?q='+e.target.value);
            dispatch(fetchDataSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure());
        };
    };
};

export const getInfo = (id) => {
    return async (dispatch) => {
        dispatch(getInfoRequest());

        try {
            const response = await axios.get('/shows/'+id);
            dispatch(getInfoSuccess(response.data));
        } catch (e) {
            dispatch(getInfoFailure());
        }
    }
};

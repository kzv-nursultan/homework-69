import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchData } from '../../store/actions/actions';
import InputSearch from '../../components/InputSearch/InputSearch';

const MainPage = () => {
    const dispatch = useDispatch();
    const store = useSelector(state=>state);
    const changeHandler = e => dispatch(fetchData(e));

    return (
        <div className="container mt-3">
            <InputSearch 
            onChange={changeHandler}
            data={store.data}/>            
        </div>
    );
};

export default MainPage;
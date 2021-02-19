import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import InputSearch from '../InputSearch/InputSearch';
import {fetchData} from '../../store/actions/actions';
import {getInfo} from '../../store/actions/actions';
import MovieInfo from '../MovieInfo/MovieInfo';

const Showinfo = props => {
    const dispatch = useDispatch();
    const store = useSelector(state=>state);
    const changeHandler = (e) => dispatch(fetchData(e));

    useEffect(()=>{
        dispatch(getInfo(props.match.params.id));
    },[props.match.params.id]);

    let movieInfo = ''

    if (!store.info.image) {
        movieInfo = (
            <MovieInfo
            name = {store.info.name}
            premiere = {store.info.premiered}
            text = {store.info.summary}
            language = {store.info.language}
            runtime = {store.info.runtime}
            />
        );
    } else {
        movieInfo = (
            <MovieInfo
            image = {store.info.image.medium}
            name = {store.info.name}
            premiere = {store.info.premiered}
            text = {store.info.summary}
            language = {store.info.language}
            genre = {store.info.genres[0]}
            runtime = {store.info.runtime}/>
        );
    }


    return (
        <div className='container mt-3'>
            <InputSearch 
            onChange={changeHandler}
            data={store.data}/>
            {movieInfo}
        </div>
    );
};

export default Showinfo;
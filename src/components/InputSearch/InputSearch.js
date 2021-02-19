import React from 'react';
import SearchList from '../SearchList/SearchList'
import {useHistory} from 'react-router-dom';

const InputSearch = props => {
    const history = useHistory();

    const onClickHandler = (id) => history.push('/shows/' + id);

    const searchList = (
        (props.data).map(key=>(
            <SearchList
            key = {key['show']['id']} 
            name={key['show']['name']}
            onClick={()=>onClickHandler(key['show']['id'])}
            />
        ))
    );
    return (
        <div className = 'container' style={{position:'static'}}>
            Search TV show: 
            <input onChange={(e)=>props.onChange(e)}/>
            <div style={{height:'100px', 
            position:'absolute',
            top:'50px',
            left:'260px',
            width:'252px',
            overflowX:'hidden',
            overflofY:'auto'}}>
                {searchList}
            </div>
        </div>
    );
};

export default InputSearch;
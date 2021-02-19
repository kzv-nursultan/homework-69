import React from 'react';

const SearchList = props =>{
    return (
       <p onClick={props.onClick}>
           {props.name}
       </p>
    )
};

export default SearchList;
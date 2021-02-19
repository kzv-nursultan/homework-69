import React from 'react';

const MovieInfo = props => {

    return (
        <div className = 'border border-primary d-flex' style={{marginTop:'110px'}}>
            <div className='m-2'>
                <img src={props.image} alt='wallpaper'/>
            </div>
            <div className = 'm-2'>
                <div>
                    <h3>
                        Name:
                        {props.name}
                    </h3>
                    <h4>
                        Premiered: {props.premiere}
                    </h4>
                    <h4>
                        Language:{props.language}
                    </h4>
                    <h5>
                        Genre:{props.genre}
                    </h5>
                    <h5>
                        Duration:{props.runtime}min
                    </h5>
                </div>
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
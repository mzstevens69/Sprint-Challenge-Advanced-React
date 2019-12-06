import React from 'react';

//player card

export const PlayerCard = props => 
    <div>
        <h1>{props.name}</h1>
        <div>
            <span>{props.country} </span>
            <br/>
            <span>{props.searches} </span>
        </div>
    </div>
    

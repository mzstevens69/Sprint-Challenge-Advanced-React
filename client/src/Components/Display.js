import React from 'react';
import { PlayerCard } from './PlayerCard';
// pull PlayerCard into Display and iterate over Data
export const Display = props => 
// implicit return
    <div>
        {/* map over data and pull entries */}
        {props.data.map(plyr => (
            <PlayerCard
                key={plyr.id}
                name={plyr.name}
                country={plyr.country}
                searches={plyr.searches}
                />
        ))}
    </div>
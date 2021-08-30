import React from 'react';


export function DirectionsCard(props) {
    const block = props.block;
    return (
        <div className="direction-card">
            <p className="text-center">
                <img className="direction-image-container mb-2" src={block.image}/>
                <div className="h4 text-color-1 text-center">{block.direction_name}</div>
                <div className="h6 text-center">{block.description}</div>
            </p>
        </div>
    );
}
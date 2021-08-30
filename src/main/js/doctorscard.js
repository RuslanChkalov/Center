import React from 'react';


export function DoctorsCard(props) {
    const block = props.block;
    return (
        <div className="doctor-card">
            <p className="text-center">
                <img className="doctor-image-container mb-2" src={block.doctor_photo}/>
                <div className="h6 text-color-1 text-center">{block.doctor_name}</div>
                <div className="h6 text-center">{block.direction}</div>
            </p>
        </div>
    );
}
import React from 'react';
import {Link} from "react-router-dom";

export function DoctorsCard(props) {
    const block = props.block;

    return (
        <div className="doctor-card">
            <Link
                to={{
                    pathname: '/doctors',
                    search: "?doctorId=" + block.id
                }}
            >
                <p className="text-center">
                    <img className="doctor-image-container mb-2" src={block.doctor_photo}/>
                    <div className="h6 text-color-1 text-center">{block.doctor_name}</div>
                    <div className="h6 text-color-2 text-center">{block.direction}</div>
                </p>
            </Link>
        </div>
    );
}
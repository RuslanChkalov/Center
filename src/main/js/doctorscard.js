import React from 'react';

export function DoctorsCard(props) {
    const block = props.block;

    return (
        <div className="doctor-card">
            {/*<Link*/}
            {/*    to={{*/}
            {/*        pathname: '/doctors',*/}
            {/*        search: "?doctorId=" + block.doctorId*/}
            {/*    }}*/}
            {/*>*/}
                <div className="text-center">
                    <img className="doctor-image-container mb-2" src={block.doctorPhotoPath}/>
                    <div className="h6 text-color-1 text-center">{block.doctorName}</div>
                    <div className="h6 text-color-2 text-center">{block.doctorSpeciality}</div>
                </div>
            {/*</Link>*/}
        </div>
    );
}
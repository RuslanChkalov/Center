import {NavigationMenu} from "./navigationmenu";
import {SearchAndFilterBar} from "./searchandfilter";
import React from 'react';
import {InfiniteScroll} from "./infinitescroll";
import {DoctorsCard} from "./doctorscard";

export function DoctorsPage() {

    return (
        <div>
            <NavigationMenu/>
            <div className="row with_margin">
                <SearchAndFilterBar/>
                <div className="scroll-small">
                    <InfiniteScroll getMoreData={getMoreData}/>
                </div>
            </div>
        </div>
    );
}

function getMoreData(page) {
    const pageToRequest = page; //For the server side
    return (
        [
            <>
                {data.body.map(block => (<DoctorsCard block={block}/>))}
            </>
        ]
    )
}


const data = {
    body: [
        {
            id: 1,
            doctor_name: "Осипов Анатолий Петрович",
            direction: "Офтальмология",
            doctor_photo: "/images/doctors/male_doctor_1.png"
        },
        {
            id: 2,
            doctor_name: "Петров Дмитрий Николаевич",
            direction: "Травмотология",
            doctor_photo: "/images/doctors/male_doctor_2.png"
        },
        {
            id: 3,
            doctor_name: "Юзько Юлия Игоревна",
            direction: "Хирургия",
            doctor_photo: "/images/doctors/female_doctor_1.png"
        },
        {
            id: 4,
            doctor_name: "Шишкина Мария Ивановна",
            direction: "Педиатрия",
            doctor_photo: "/images/doctors/female_doctor_2.png"
        },
        {
            id: 5,
            doctor_name: "Иванов Георгий Викторович",
            direction: "Эндокринология",
            doctor_photo: "/images/doctors/male_doctor_3.png"
        },
        {
            id: 6,
            doctor_name: "Белов Михаил Александрович",
            direction: "Кардиология",
            doctor_photo: "/images/doctors/male_doctor_4.png"
        }
    ]
};
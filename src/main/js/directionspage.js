import {NavigationMenu} from "./navigationmenu";
import React from 'react';
import {InfiniteScroll} from "./infinitescroll";
import {DirectionsCard} from "./directionscard";


export function DirectionsPage() {
    return (
        <div>
            <NavigationMenu/>
            <div className="row with_margin">
                <div className="scroll-full">
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
                {data.body.map(block => (<DirectionsCard block={block}/>))}
            </>
        ]
    )
}

const data = {
    body: [
        {
            id: 1,
            direction_name: "Аллергология",
            description: "Диагностика и лечение аллергии и аутоимунных заболеваний",
            image: "/images/directions/allergologiya.png"
        },
        {
            id: 2,
            direction_name: "Анестезиология",
            description: "Местная, спинальная, эпидуральная анестезия и наркоз",
            image: "/images/directions/anesteziologiya.png"
        },
        {
            id: 3,
            direction_name: "Гастроэнтерология",
            description: "Диагностика и лечение заболеваний ЖКТ",
            image: "/images/directions/gastroenterologiya.png"
        },
        {
            id: 4,
            direction_name: "Гинекология",
            description: "Диагностика и лечение заболеваний женской репродуктивной системы",
            image: "/images/directions/ginekologiya.png"
        },
        {
            id: 5,
            direction_name: "Кардиология",
            description: "Диагностика и лечение заболеваний сердца",
            image: "/images/directions/kardiologiya.png"
        },
        {
            id: 6,
            direction_name: "Диагностика",
            description: "МСКТ, УЗИ, рентген",
            image: "/images/directions/diagnostika.png"
        },
        {
            id: 7,
            direction_name: "Маммология",
            description: "Диагностика и лечение заболеваний молочной железы",
            image: "/images/directions/mammologiya.png"
        },
        {
            id: 8,
            direction_name: "Неврология и нейрофизиология",
            description: "Диагностика и лечение заболеваний нервной системы",
            image: "/images/directions/nevrologiya.png"
        },
        {
            id: 9,
            direction_name: "Нейрохирургия",
            description: "Вопросы оперативного лечения заболеваний и травм нервной системы",
            image: "/images/directions/nejrohirurgiya.png"
        }
    ]
};
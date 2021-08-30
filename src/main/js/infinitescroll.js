import React, {useEffect, useState, useRef} from 'react';
import {DoctorsCard} from "./doctorscard";
import {DirectionsCard} from "./directionscard";

const directionDictionary = {
    body: [
        {
            direction_name: "Аллергология",
            description: "Диагностика и лечение аллергии и аутоимунных заболеваний",
            image: "/images/directions/allergologiya.png"
        },
        {
            direction_name: "Анестезиология",
            description: "Местная, спинальная, эпидуральная анестезия и наркоз",
            image: "/images/directions/anesteziologiya.png"
        },
        {
            direction_name: "Гастроэнтерология",
            description: "Диагностика и лечение заболеваний ЖКТ",
            image: "/images/directions/gastroenterologiya.png"
        },
        {
            direction_name: "Гинекология",
            description: "Диагностика и лечение заболеваний женской репродуктивной системы",
            image: "/images/directions/ginekologiya.png"
        },
        {
            direction_name: "Кардиология",
            description: "Диагностика и лечение заболеваний сердца",
            image: "/images/directions/kardiologiya.png"
        },
        {
            direction_name: "Диагностика",
            description: "МСКТ, УЗИ, рентген",
            image: "/images/directions/diagnostika.png"
        },
        {
            direction_name: "Маммология",
            description: "Диагностика и лечение заболеваний молочной железы",
            image: "/images/directions/mammologiya.png"
        },
        {
            direction_name: "Неврология и нейрофизиология",
            description: "Диагностика и лечение заболеваний нервной системы",
            image: "/images/directions/nevrologiya.png"
        },
        {
            direction_name: "Нейрохирургия",
            description: "Вопросы оперативного лечения заболеваний и травм нервной системы",
            image: "/images/directions/nejrohirurgiya.png"
        }
    ]
};
const data = {
    body: [
        {
            doctor_name: "Осипов Анатолий Петрович",
            direction: "Офтальмология",
            doctor_photo: "/images/doctors/male_doctor_1.png"
        },
        {
            doctor_name: "Петров Дмитрий Николаевич",
            direction: "Травмотология",
            doctor_photo: "/images/doctors/male_doctor_2.png"
        },
        {
            doctor_name: "Юзько Юлия Игоревна",
            direction: "Хирургия",
            doctor_photo: "/images/doctors/female_doctor_1.png"
        },
        {
            doctor_name: "Шишкина Мария Ивановна",
            direction: "Педиатрия",
            doctor_photo: "/images/doctors/female_doctor_2.png"
        },
        {
            doctor_name: "Иванов Георгий Викторович",
            direction: "Эндокринология",
            doctor_photo: "/images/doctors/male_doctor_3.png"
        },
        {
            doctor_name: "Белов Михаил Александрович",
            direction: "Кардиология",
            doctor_photo: "/images/doctors/male_doctor_4.png"
        }
    ]
};

export function InfiniteScroll(props) {
    const activeElement = props.activeElement;
    let [postList, setPostList] = useState(null);
    switch (activeElement) {
        case 2: [postList, setPostList] = useState(data.body); break;
        case 3: [postList, setPostList] = useState(directionDictionary.body); break;
    }

    const [page, setPage] = useState(1);
    const loader = useRef(null);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        // initialize IntersectionObserver
        // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    useEffect(() => {
        // On scroll data update
        switch (activeElement) {
            case 2: setPostList(postList.concat(data.body)); break;
            case 3: setPostList(postList.concat(directionDictionary.body)); break;
        }
    }, [page])

    // Page counter
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }


    return (<div className="row mt-5">
            {(() => {
                switch (activeElement) {
                    case 2: return postList.map(block => (<DoctorsCard block={block}/>)); break;
                    case 3: return postList.map(block => (<DirectionsCard block={block}/>)); break;
                }
            })()}
            <div className="loading" ref={loader}></div>
        </div>
    )
}
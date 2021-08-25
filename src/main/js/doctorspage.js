import {Link} from "react-router-dom";
import {NavigationMenu} from "./navigationmenu";
import {SearchAndFilterBar} from "./searchandfilter";

const React = require('react');

const data = {
        body: [
            {
                doctor_name: "Осипов Анатолий Петрович",
                direction: "Офтальмология",
                doctor_photo: "/images/male_doctor_1.png"
            },
            {
                doctor_name: "Петров Дмитрий Николаевич",
                direction: "Травмотология",
                doctor_photo: "/images/male_doctor_2.png"
            },
            {
                doctor_name: "Юзько Юлия Игоревна",
                direction: "Хирургия",
                doctor_photo: "/images/female_doctor_1.png"
            },
            {
                doctor_name: "Шишкина Мария Ивановна",
                direction: "Педиатрия",
                doctor_photo: "/images/female_doctor_2.png"
            },
            {
                doctor_name: "Иванов Георгий Викторович",
                direction: "Эндокринология",
                doctor_photo: "/images/male_doctor_3.png"
            },
            {
                doctor_name: "Белов Михаил Александрович",
                direction: "Кардиология",
                doctor_photo: "/images/male_doctor_4.png"
            }
        ]
};
const directionList = ["Офтальмология", "Травмотология", "Кардиология", "Хирургия", "Педиатрия"];

export function DoctorsPage() {
    return (
        <div>
            <NavigationMenu activeElement={2}/>
            <div className="row with_margin">
                <SearchAndFilterBar directionList={directionList}/>
                <div className="row mt-5">
                    {data.body.map(block => (
                        <div className="doctor-card">
                            <p className="text-center">
                                <img className="doctor-image-container mb-2" src={block.doctor_photo}/>
                                <div className="h6 text-color-1 text-center">{block.doctor_name}</div>
                                <div className="h6 text-center">{block.direction}</div>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
import { useState } from "react";

const Calender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 매 달 1일
    const firstDayOfMonth = new Date(year, month, 1);
    // 달력에 표시되는 첫 날 (첫째주 일요일 날짜)
    const firstDay = new Date(firstDayOfMonth);
    firstDay.setDate(1 - firstDayOfMonth.getDay()); // getDay()는 요일을 숫자로 받아온다 (일요일 = 0, 월요일 = 1 ...)

    // 매 달의 마지막 날 (30일, 31일)
    const lastDayOfMonth = new Date(year, month + 1, 0);
    // 달력에 표시되는 마지막날 (마지막주 토요일 날짜)
    const lastDay = new Date(lastDayOfMonth); // lastDay = 이달의 마지막 날짜.
    lastDay.setDate(lastDay.getDate() + (6 - lastDayOfMonth.getDay()));

    const weeks = []; // 주들을 모을 배열
    const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

    const groupDatesByWeek = (firstDay, lastDay) => {
        let currentDay = new Date(firstDay);
        let week = [];

        while (currentDay <= lastDay) {
            week.push(currentDay.getDate());

            if (week.length === 7 || currentDay.getDay() === 6) {
                weeks.push(week);
                week = [];
            }
            currentDay.setDate(currentDay.getDate() + 1);
        }

        if (week.length > 0) { // 마지막주 처리 (마지막 날이 토요일이 아닐때)
            weeks.push(week);
        }
        return weeks;
    }

    groupDatesByWeek(firstDay, lastDay)
    // console.log(weeks)

    return (
        <>

            <div className="days">
                {days.map((el) => <div className="day" key={el}>{el}</div>)}
            </div>
            <div className="datesContainer">
                <DisplayWeeks weeks={weeks} />
            </div>
        </>
    )
}

const DisplayWeeks = ({ weeks }) => {
    return weeks.map((week) => (
        <div key={week} className="week">
            <DisplayWeek week={week}/>
        </div>
    ))
}

const DisplayWeek = ({ week }) => {
    return week.map((el) => (
        <button key={el} className="date" >
            <h2>{el}</h2>
        </button>
    ))
}

export default Calender;
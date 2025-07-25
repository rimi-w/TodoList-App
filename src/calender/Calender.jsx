import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../todoList/Todo";

const Calender = () => {
  const [currentDate] = useState(new Date());
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
      week.push({
        month: currentDay.getMonth() + 1,
        date: currentDay.getDate(),
      });

      if (week.length === 7 || currentDay.getDay() === 6) {
        weeks.push(week);
        week = [];
      }
      currentDay.setDate(currentDay.getDate() + 1);
    }

    if (week.length > 0) {
      // 마지막주 처리 (마지막 날이 토요일이 아닐때)
      weeks.push(week);
    }
    return weeks;
  };

  groupDatesByWeek(firstDay, lastDay);

  return (
    <>
      <div className="h-[40px] bg-[#ffffff31] flex justify-center items-center">
        {days.map((el) => (
          <div
            className={`${
              el === days[0]
                ? "text-[#ec4e4e]"
                : el === days[6]
                ? "text-[#7892f0]"
                : "text-white"
            }
                        w-[80px] h-[30px]`}
            key={el}
          >
            {el}
          </div>
        ))}
      </div>
      <div>
        <DisplayWeeks weeks={weeks} />
      </div>
    </>
  );
};

const DisplayWeeks = ({ weeks }) => {
  return weeks.map((week) => (
    <div key={week} className="flex bg-[#757575] week">
      <DisplayWeek week={week} />
    </div>
  ));
};

const DisplayWeek = ({ week }) => {
  const navigate = useNavigate();

  const navigateToTodoList = (month, date) => {
    navigate(`/todoList/${month}${date}`);
  };
  return week.map((el) => (
    <div
      key={`${el.month}${el.date}`}
      className={`${
        el === week[0]
          ? "text-[#ec4e4e]"
          : el === week[6]
          ? "text-[#7892f0]"
          : "text-white"
      } 
            w-[80px] h-[80px] px-[8px] border border-[#393939] truncate`}
      onClick={() => navigateToTodoList(el.month, el.date)}
    >
      <h2 className="h-[30px] text-[15px] flex p-[6px]">{el.date}</h2>
      <Todo />
    </div>
  ));
};

export default Calender;

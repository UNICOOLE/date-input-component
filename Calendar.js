import React, { useState } from 'react';

const Calendar = ({ selectedDate, onDateSelect }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = daysInMonth(currentYear, currentMonth);

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        currentYear === new Date().getFullYear() &&
        currentMonth === new Date().getMonth() &&
        day === new Date().getDate();

      days.push(
        <div
          key={day}
          className={`day ${isToday ? 'today' : ''}`}
          onClick={() => onDateSelect(`${day}.0${currentMonth + 1}.${currentYear}`)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentMonth(currentMonth - 1)}>❮</button>
        <span>{currentMonth + 1}/{currentYear}</span>
        <button onClick={() => setCurrentMonth(currentMonth + 1)}>❯</button>
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
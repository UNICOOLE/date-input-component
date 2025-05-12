import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ darkMode }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={`date-input-container ${darkMode ? 'dark-mode' : ''}`}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Выберите дату"
        className="date-input"
      />
      <button className="calendar-button" title="Выбрать дату">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5Zm10 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5ZM3 .75a.75.75 0 0 1 .75.75v14.5c0 .414.336.75.75.75h8.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75V1.5a.75.75 0 0 1 .75-.75Zm8 0a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 9 1.5v13.75a.75.75 0 0 1-1.5 0V2h7a.75.75 0 0 1 .75.75Z"/>
        </svg>
      </button>
    </div>
  );
};

export default DateInput;
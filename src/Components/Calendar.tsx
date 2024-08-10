import React, { MouseEvent, useState } from 'react';
import { DateNumber } from "../../Types";
import { monthDates } from "../Configs/MonthDays";
import { Weekdays } from "../Configs/Weekdays";
import MonthYearDisplay from '../Configs/MonthYear';
import TaskModal from './TaskModal';

export const Calendar: React.FC<{}> = ({}) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
        setSelectedDate(e.currentTarget.getAttribute('value'));
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const generateDates = (date: number) => {
        let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
        return (
            <button
                className={`date ${date === 18 ? "today" : ""} ${date === selectedDateNumber ? "selectedDateNumber" : ""}`}
                onClick={handleChange}
                value={date}
            >
                <p>{date}</p>
            </button>
        );
    };

    const generateWeeks = (dates: Array<DateNumber>) => {
        let daysInWeek = 7;
        let numberOfWeeks = Math.ceil(dates.length / daysInWeek);
        let tempArray = new Array(numberOfWeeks);

        for (let i = 0; i < numberOfWeeks; i++) {
            tempArray[i] = new Array(daysInWeek);
            for (let j = 0; j < daysInWeek; j++) {
                tempArray[i][j] = dates[i * daysInWeek + j];
            }
        }

        return tempArray;
    };

    return (
        <div className="calendar-container">
            <div className="datepicker-container">
                <MonthYearDisplay />
            </div>
            <div className="weekdays-container">
                {Weekdays.map(day => (
                    <div className="week-day" key={day}>{day}</div>
                ))}
            </div>
            <div className="calendar">
                {generateWeeks(monthDates).map((week, weekIndex) => (
                    <div className="week" key={weekIndex}>
                        {week.map((day: { day: number; }, dayIndex: React.Key | null | undefined) => (
                            <React.Fragment key={dayIndex}>
                                {generateDates(day.day)}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
            {isModalVisible && (
                <TaskModal onClose={handleCloseModal} selectedDate={selectedDate} />
            )}
        </div>
    );
};

export default Calendar;

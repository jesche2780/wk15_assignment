import React, { MouseEvent, useState } from 'react';
import { DateNumber } from "../../Types";
import { monthDates } from "../Configs/MonthDays";
import { Weekdays } from "../Configs/Weekdays";
import MonthYearDisplay from '../Configs/MonthYear';
import TaskModal from './TaskModal';

// Imported all aspects of the calendar here to allow further parts of the code down below.

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
// created the main calendar function that establishes a state for variables "selectedDate" and "isModalVisible", with selected Date variable starting with the state "null" and modal visibility
// starting on the "false state".

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
// Used the function "generateDates" to create the the list of dates for the calendar, which is then added to a button, where the number "18" is highlighted on the calendar in order to represent "today", a function
// not yet usable since it does not land on the correct day, but can be used in a future version of this application to automatically highlight today's date.

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

// Created function "generateWeeks" to create an array of number o days, weeks and to fill them into each cell.

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

// The result is the return of the data to fill into the html code above that will fill in the calendar with the class container "calendar-container", with the datepicker container that then calls the
// Month Year display component. The weekdays container then calls each day, and then the week and date generator to fill in the calendar itself. Finally, a short circuit is used to check if the 
// modal is visible and to then handle a closed modal as well as using the selected date to show the date that is selected on the modal.


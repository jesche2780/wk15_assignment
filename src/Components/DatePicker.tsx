import { Calendar } from "./Calendar"

export const DatePicker: React.FC<{}> = ({}) => {
    return (
        <div className="date-picker-container">
            <div className="background-container bg-light text-black" style={{ height: '500px', width: '100%'}}></div>
            <Calendar />
        </div>
    )
}

// The datepicker component, which is the date picker container layout where the selector occurs on the calendar.
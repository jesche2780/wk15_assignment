import { useState } from "react";
import leftIcon from  '../assets/arrow-left-long-solid.svg'
import rightIcon from  '../assets/arrow-right-long-solid.svg'
import LeftButton from "../Components/LeftButton";
import RightButton from "../Components/RightButton";


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthYearGenerator = (): { month: string, year: number }[] => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 2051 - currentYear }, (_, i) => currentYear + i);

    const yearMonthPairs = years.flatMap(year =>
        months.map(month => ({ month, year }))
    );

    return yearMonthPairs;
};

const MonthYearDisplay: React.FC = () => {
    const pairs = monthYearGenerator();
    const currentMonthIndex = new Date().getMonth();
    const currentYearIndex = new Date().getFullYear() - new Date().getFullYear();
    const [currentIndex, setCurrentIndex] = useState(currentMonthIndex + currentYearIndex * 12);


    const handlePreviousMonth = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 12 * 100) % (12 * 100));
    };

    const handleNextMonth = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (12 * 100));
    };

    return (
        <div>
            <LeftButton icon={leftIcon} onClick={handlePreviousMonth} />
            {pairs[currentIndex].month} - {pairs[currentIndex].year}
            <RightButton icon={rightIcon} onClick={handleNextMonth} />
        </div>
    );
};

export default MonthYearDisplay;


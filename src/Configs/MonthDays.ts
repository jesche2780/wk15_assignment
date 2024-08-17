import { DateNumber } from '../../Types';

function generateDates():DateNumber[] {
    let dates: DateNumber[] = []
    for (let i = 1; i < 29; i++) {
        let date:DateNumber = {day: i};
        dates.push(date);
    }
    return dates;
}

export const monthDates: DateNumber[] = generateDates();


export type DateNumber = {
    day: number;   
}

export type Weekday = {
    letter:string;
}

export type ButtonProps = {
    icon: string,
    onClick: () => void
}

export type TaskModalProps = {
    onClose: () => void;
    selectedDate: string | null;
}
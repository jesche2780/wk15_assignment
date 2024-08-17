import { ButtonProps } from "../../Types"

export default function RightButton({ icon, onClick }: ButtonProps) {
    return (
        <button
            className="btn btn-outline-secondary me-2"
            onClick={onClick}
        >
            <img src={icon} style={{width: "1rem"}}/>
        </button>
    )
}

// A rightbutton component, which inherits the buttonprops type that handles the onclick with the onclick function. This button moves the months to the right when clicked on the calendar.
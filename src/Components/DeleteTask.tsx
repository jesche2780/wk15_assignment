import { ButtonProps } from "../../Types"

export default function DeleteTask({ icon, onClick }: ButtonProps) {
    return (
        <button
            className="btn btn-outline-secondary me-2"
            onClick={onClick}
        >
            <img src={icon} style={{width: "1rem"}}/>
        </button>
    )
}

// A delete task component which handles the onclick, calling the onclick function button props.
import { ButtonProps } from "../../Types"

export default function AddButton({ icon, onClick }: ButtonProps) {
    return (
        <button
            className="btn btn-outline-secondary me-2"
            onClick={onClick}
        >
            <img src={icon} style={{width: "1rem"}}/>
        </button>
    )
}

// An add task button, which inherits the button prop to handle onclick by using the onclick function.

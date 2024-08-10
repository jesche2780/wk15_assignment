import { ButtonProps } from "../../Types"

export default function LeftButton({ icon, onClick }: ButtonProps) {
    return (
        <button
            className="btn btn-outline-secondary me-2"
            onClick={onClick}
        >
            <img src={icon} style={{width: "1rem"}}/>
        </button>
    )
}
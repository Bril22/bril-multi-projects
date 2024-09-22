interface IButtons {
    label?: string;
    onclick?: () => void;
    color?: string;
}
export const DefaultButton = ({
    label,
    onclick,
    color = "text-white",
}: IButtons) => {
    return (
        <button onClick={onclick} className={`btn bg-transparent rounded-md border-2 border-${color} text-${color}`}>
            {label}
        </button>
    )
}
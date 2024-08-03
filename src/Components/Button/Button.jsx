
const Button = (props) => {
    return (
        <button className={`capitalize ${props.className} ${props.padding ? props.padding : "px-12 py-3"} ${props.clicked ?  'bg-[#565E6D] text-[#fff]' : 'bg-[#fff] border border-[#565E6D]'}`}>
            {props.text}
        </button>
    );
}

export default Button;

const Button = (props) => {
    return (
        <button 
            className={`capitalize ${props.className} ${props.padding ? props.padding : "px-7 py-1"} ${props.clicked ? 'bg-[#565E6D] text-[#fff]' : 'bg-[#fff] border border-[#565E6D]'}`}
            style={{ fontFamily: 'Poppins, sans-serif' }} 
        >
            {props.text}
        </button>
    );
}

export default Button;

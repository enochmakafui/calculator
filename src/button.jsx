const Button = (props) =>{
    return(
        <button className=" w-20 h-20 border-none outline-none rounded-md font-bold text-2xl shadow-lg" style={{backgroundColor:props.color,color:props.textColor}}>{props.item}</button>



    )



}

export default Button;
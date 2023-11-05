import {useState} from "react"


const Button = (props) =>{
    const [calText,setCalcText] = useState(" ")
    return(
        <button className=" w-20 h-20 border-none outline-none rounded-md font-bold text-2xl shadow-lg" onClick={()=>{
          props.showText(props.item)
        }}
         style={{backgroundColor:props.bgColor,color:props.textColor}}>{props.item}</button>



    )



}

export default Button;

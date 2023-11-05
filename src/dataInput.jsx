import {useState} from "react"
const KEYS = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","X"]


const DataInput = () => {
  const [inputText,setInputText] = useState("0")
  function handleClick(value) {
    if (value === "DEL") {
      // Handle deletion logic
      setInputText(inputText.slice(0, -1));
    } else if (value === "=") {
      // Handle calculation logic
      try {
        setInputText(eval(inputText));
      } catch (error) {
        setInputText("Error");
      }
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      // Set the current operation to the clicked operator
      setInputText(inputText + value);
    } else {
      // Append the clicked button value to the input
      setInputText(inputText + value);
    }
  }
  

return(
    <div >
    <div id="calc-input" className="px-5 w-full ">
    <input dir="rtl" type="text" className="bg-back w-96 h-20 text-4xl rounded-md outline-none" style={{caretColor: 'transparent',backgroundColor:"#EEEEEE"}} value={inputText} />
    </div>
    <div className=" mt-5 py-5 px-5 mx-5 grid rounded-md grid-cols-4 gap-y-4 gap-x-4 w-96 " style={{
        backgroundColor:'#D3CDCD'
    }}>
   {KEYS.map((item, index) => {
  return item === "DEL" ? (
    <button className="w-20 h-20 border-none outline-none rounded-md font-bold text-2xl shadow-lg" style={{backgroundColor:"#64B4BD",color:"white"}} onClick={()=>{handleClick(item)}}>{item} </button>
  ) : (
    <button className="w-20 h-20 border-none outline-none rounded-md font-bold text-2xl shadow-lg" style={{backgroundColor:"#E5E4E0"}} onClick={()=>{
    handleClick(item)}}>{item} </button>
    );
})}
    <button className="text-white w-44 h-20 border-none outline-none rounded-md  font-bold text-2xl col-span-2 " style={{backgroundColor:"#64B4BD"}}>RESET</button>
    <button className="text-white w-44 h-20 border-none outline-none rounded-md font-bold text-2xl col-span-2 " style={{backgroundColor:"#FF8B38"}}>=</button>
    </div>
    


    
    </div>
)



}
export default DataInput;
import Button from "./button"
const KEYS = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","X"]


const DataInput = () => {

return(
    <div >
    <div id="calc-input" className="px-5 w-full ">
    <input dir="rtl" type="text" className="bg-back w-96 h-20 text-4xl rounded-md outline-none" style={{caretColor: 'transparent',backgroundColor:"#EEEEEE"}} />
    </div>
    <div className=" mt-5 py-5 px-5 mx-5 grid rounded-md grid-cols-4 gap-y-4 gap-x-4 w-96 " style={{
        backgroundColor:'#D3CDCD'
    }}>
   {KEYS.map((item, index) => {
  return item === "DEL" ? (
    <Button item={item} key={index} color="#64B4BD" textColor="white"/>
  ) : (
    <Button item={item} key={index} color="#E5E4E0" />
  );
})}
    <button className="text-white w-44 h-20 border-none outline-none rounded-md  font-bold text-2xl col-span-2 " style={{backgroundColor:"#64B4BD"}}>RESET</button>
    <button className="text-white w-44 h-20 border-none outline-none rounded-md font-bold text-2xl col-span-2 " style={{backgroundColor:"#FF8B38"}}>=</button>
    </div>
    <div >


    </div>
    </div>
)



}
export default DataInput;
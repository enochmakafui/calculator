import Button from "./button"
const KEYS = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","X"]


const DataInput = () => {

return(
    <div >
    <div id="calc-input" className="px-5 w-full bg-red-500 ">
    <input dir="rtl" type="text" className="bg-back w-96 h-20 text-4xl rounded-md outline-none" style={{caretColor: 'transparent'}} />
    </div>
    <div className="bg-red-500 mt-10 px-5 mx-5 grid grid-cols-4 gap-y-4 gap-x-4 w-96 ">
    {KEYS.map((item,index) => {
        return(
           <Button item={item} key={index} />
        )
    })}
    <button className="bg-white w-44 h-20 border-none outline-none rounded-md  font-bold text-2xl col-span-2 ">RESET</button>
    <button className="bg-white w-44 h-20 border-none outline-none rounded-md font-bold text-2xl col-span-2 ">=</button>
    </div>
    <div >


    </div>
    </div>
)



}
export default DataInput;

import { useState } from "react";
import ScheduleCalender from "./ScheduleCalender";
import { Link } from "react-router-dom";

const ScheduleDemo = () => {
    const[calendar, setCalender] = useState(false)
   
    return <>
        <div className="">
            <div className="mt-20 p-40 bg-pink-200 flex items-center justify-between">
                <div className="bg-blue-300 p-10 w-48">block 1</div>
                <div className="bg-blue-300 p-10 w-48">block 2</div>
                <button onClick={()=>setCalender(!calendar)} value={calendar} className="bg-blue-300 p-10 w-48 font-bold">Schedule Date
                    {calendar && (<ScheduleCalender/>)}
                    

                    

                </button>
                <div className="bg-blue-300 p-10 w-48">block 4</div>
                <div className="bg-blue-300 p-10 w-48">block 5</div>
            </div>

        </div>
    </>
}
export default ScheduleDemo;
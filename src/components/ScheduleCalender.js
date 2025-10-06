import Calendar from "react-calendar";
import { useState } from "react";

const ScheduleCalender=()=>{
    const[date, setDate] = useState( new Date());
    return<>
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">React Calendar</h2>
        
        <div className="bg-blue-400 p-4 rounded">
          <Calendar onChange={setDate} value={date} />
        </div>

        <p className="mt-4 text-center text-lg">
          <span className="font-bold">Selected Date: </span>
          {date.toDateString()}
        </p>
      </div>
    </div>
    </>
}
export default ScheduleCalender;
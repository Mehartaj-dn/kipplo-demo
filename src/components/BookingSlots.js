import { useState } from "react";

const BookingSlots =()=>{
    const[selectedSlot, setSelectedSlot]=useState(null);

    const slots = [
        "9:00-AM to 10:00-AM",
        "10:00-AM to 11:00-AM",
        "11:00-AM to 12:00-PM",
        "12:00-PM to 1:00-PM",
        "1:00-PM to 2:00-PM",
        "9:00-AM to 3:00-PM",
    ]
    return<>
    <div className="m-6 p-8 bg-gray-400">
        <ul className="m-6 p-8 bg-gray-100 space-y-2 rounded-2xl">
            {slots.map((slot,index)=>
            <li
             className="bg-gray-300 flex items-center justify-between rounded-xl text-semibold"
             key={index}>
                {slot}
                <button
               className="bg-gray-900 p-4 rounded-xl"
                >Book</button>

            </li>

        )}
          <li>
            
          </li>
            
        </ul>

    </div>
    </>
}
export default BookingSlots;
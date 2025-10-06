import { useState } from "react";

const ContactName =()=>{
    const[contactName, setContactName] = useState(false)
    return<>
     <li onClick={()=>setContactName(!contactName)} className="m-4 p-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group rounded-lg w-60">
                  Contact Name
                  <br />
                  {contactName && (<input type="text" placeholder="Contact Name" />)}

                     
               </li>
      
    </>
}
export default ContactName;
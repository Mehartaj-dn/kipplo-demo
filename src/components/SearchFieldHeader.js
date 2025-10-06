import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchFieldHeader =()=>{
    const[inputFields,setInputFields]=useState("")
    const navigate =useNavigate()
    const handleInputFields =(e)=>{
        setInputFields(e.target.value)
    }
   

   const handleCompanySearch =()=>{
        if(inputFields.trim()!==""){
             navigate("/company-search-sidebar/company-name")
        }
    }
    return<>
        <li className="w-60 h-30 bg-gray-400 rounded-xl flex items-center justify-end ">
          <img src="/images/filter.png" alt="" className="h-6 rounded-xl mr-20 ml-1 bg-blue-200 w-auto" />
        <input type="text"
        className=""
        placeholder="serch field"
        value={inputFields}
        onChange={handleInputFields}/>
         <button
         value={inputFields} 
         onClick={handleCompanySearch}
         className="bg-indigo-700 p-2 w-20 m-1 mr-6 rounded-xl">search</button>
            </li>
            </>
}
export default SearchFieldHeader;

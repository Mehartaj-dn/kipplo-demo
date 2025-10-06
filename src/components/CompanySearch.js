import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "./Dashboard";
import SearchNavbar from "./SearchNavbar";
 // import DashBoard from "./Dashboard";
// import SearchNavbar from "./SearchNavbar";
// import PeopleSearch from "./PeopleSearch";


function CompanySearch(){
    const[companyName, setCompanyName] = useState(false)
    const[hqLocation, setHqLocation] =useState(false)
    const[industry, setIndustry] = useState(false)
    const[revenvue, setRevenue] =useState(false)
    const[technology, setTechnology] = useState(false)
    const[yearFounded, setYearFounded] =useState(false)
    const[empHeadCount, setEmpHeadCount] = useState(false)
    
    const [inputFields, setInputFields] = useState("")
    const navigate = useNavigate()
    const handleInputFields = (e) => {
        setInputFields(e.target.value)
    }


    // const handleCompanySearch = () => {
    //     if (inputFields.trim() !== "") {
    //         navigate("/company-search-sidebar/company-name")
    //     }
    // }
   

    

    return<>
    <div >
    <div>
        <DashBoard />
        <SearchNavbar />
    
       
        <ul className="bg-gray-300 w-60"> 
             <li className="w-60 h-30 bg-gray-400 rounded-xl flex items-center justify-end ">
            <img src="/images/filter.png" alt="" className="h-6 rounded-xl mr-20 ml-1 bg-blue-200 w-auto" />
            {/* <input type="text"
                className=""
                placeholder="serch field"
                value={inputFields}
                onChange={handleInputFields} /> */}
            <button
                value={inputFields}
                onClick={setInputFields}
                className="bg-indigo-700 p-2 w-20 m-1 mr-6 rounded-xl">
                    {inputFields ? "hide":"edit"}
                    search</button>
        </li>
             
         
        
           
            <li className="font-aria font-bold p-3 text-aria">Company</li>
            <li onClick={()=>setCompanyName(!companyName)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Company Name
              
                {companyName ?  (<input type="text" value={companyName} onChange={setCompanyName} placeholder="company name" className="w-50"/>):companyName}
            </li>
            <li onClick={()=>setHqLocation(!hqLocation)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> HQ Location
                
                {hqLocation && (<input type="text" placeholder="hq location" className="w-50"/>)}
            </li>
            <li onClick={()=>setIndustry(!industry)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Industry
                <br></br>
                {industry && (<label>Industry labels :<input type="text" placeholder="enter industry Label" className="w-50"/></label>)}
                <br />
                {industry && (<label>SIC :<br /><input type="text" placeholder="enter industry SIC" className="w-50"/></label>)}
                {industry && (<label>NAICS :<input type="text" placeholder="enter industry NAICS" className="w-50"/></label>)}
            </li>
            <li onClick={()=>setRevenue(!revenvue)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Revenue
                <br></br>
                {revenvue && ( <input type="text" placeholder="revenvue" className="w-50"/>)}
            </li>
            <li onClick={()=>setTechnology(!technology)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Technology
                <br></br>
                {technology && (<input type="text" placeholder="technology" className="w-50"/>)}
            </li>
            <li onClick={()=>setYearFounded(!yearFounded)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Year Founded
                <br></br>
                { yearFounded && <input type="text" placeholder="year founded" className="w-50"/>}
            </li>
            <li onClick={()=>setEmpHeadCount(!empHeadCount)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">Employee Head Count
                <br></br>
                {empHeadCount && (<input type="text" placeholder="emp-head-count" className="w-50"/>)}
            </li>
            

           


        </ul>
        
    </div>
    </div>
    </>
}

export default CompanySearch;
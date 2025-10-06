
import { useState } from "react";
import Company from "./Company";
// import DashBoard from "./Dashboard";
// import SearchNavbar from "./SearchNavbar";
import CompanySearch from "./CompanySearch";
// import ContactName from "../people/ContactName";



const PeopleSearch = () => {
   const [contactName, setContactName]=useState(false)
   const [jobTitle, setJobTitle] =useState(false)
   const [department, setDepartment] =useState(false)
   const [contactLocation, setContactLocation] =useState(false)
   const [seniority, setSeniority] = useState(false)
   const [searchType, setSearchType] = useState(false)
   const [exclude, setExclude] = useState(false)
    const[technology, setTechnology] = useState(false)
   


   return <>
     
      <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
         <span className="sr-only">Open sidebar</span>

      </button>
      
      <ul className="bg-gray-300 w-60">
      
       <li className="font-aria font-bold p-3 text-aria">People</li>
        
            <li onClick={()=>setContactName(!contactName)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">Contact Name
                <br></br>
                {contactName && (<input type="text" placeholder="Contact name" className="w-50"/>)}
            </li>
             <li onClick={()=>setJobTitle(!jobTitle)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Job Title
                <br></br>
                {jobTitle && (<input type="text" placeholder="Job title" className="w-50"/>)}
            </li>
             <li onClick={()=>setTechnology(!technology)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Technology
                <br></br>
                {technology && (<input type="text" placeholder="technology" className="w-50"/>)}
            </li>
             <li onClick={()=>setDepartment(!department)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Department
                <br></br>
                {department && (<input type="text" placeholder="department" className="w-50"/>)}
            </li>
             <li onClick={()=>setContactLocation(!contactLocation)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Contact Location
                <br></br>
                {contactLocation && (<input type="text" placeholder="contact Location" className="w-50"/>)}
            </li>
             <li onClick={()=>setSeniority(!seniority)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Seniority
                <br></br>
                {seniority && (<input type="text" placeholder="Seniority" className="w-50"/>)}
            </li>
             <li onClick={()=>setSearchType(!searchType)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Search Type
                <br></br>
                {searchType && (<input type="text" placeholder="Search Type" className="w-50"/>)}
            </li>
             <li onClick={()=>setExclude(!exclude)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl"> Exclude
                <br></br>
                {exclude && (<input type="text" placeholder="Exclude" className="w-50"/>)}
            </li>
           
            </ul>










    

   </>
}
export default PeopleSearch;
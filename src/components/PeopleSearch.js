
import { useState } from "react";
import Company from "./Company";
// import DashBoard from "./Dashboard";
// import SearchNavbar from "./SearchNavbar";
import CompanySearch from "./CompanySearch";
import CompanyName from "../company/CompanyName";
import HqLocation from "../company/HqLocation";
import DashBoard from "./Dashboard";
import SearchNavbar from "./SearchNavbar";
// import ContactName from "../people/ContactName";



const PeopleSearch = () => {
   const [contactName, setContactName]=useState(false)
   const [jobTitle, setJobTitle] =useState(false)
   const [department, setDepartment] =useState(false)
   const [contactLocation, setContactLocation] =useState(false)
   const [seniority, setSeniority] = useState(false)
   const [searchType, setSearchType] = useState(false)
   const [exclude, setExclude] = useState(false)
   
    const [companyName, setCompanyName] = useState("")
    const [showCompanyName, setShowCompanyName] = useState(false)
    const [hqLocation, setHqLocation] = useState("")
    const [showHqLocation, setShowHqLocation] = useState(false)
    const [industry, setIndustry] = useState("")
    const [showIndustry, setShowIndustry] = useState(false)
    const [revenvue, setRevenue] = useState("")
    const [showRevenue, setShowRevenue] = useState(false)
    const [technology, setTechnology] = useState("")
    const [showTechnology, setShowTechnology] = useState(false)
    const [yearFounded, setYearFounded] = useState("")
    const [showYearFounded, setShowYearFounded] = useState(false)
    const [empHeadCount, setEmpHeadCount] = useState("")
    const [showEmpHeadCount, setShowEmpHeadCount] = useState(false)
        const renderComponent = () => {
        if (companyName.trim().length > 0) {
            return <CompanyName />;
        }
        if (hqLocation.trim().length > 0) {
            return <HqLocation />;
        }
    }
   


   return <>
   <DashBoard />
   <SearchNavbar />
     
     
      
      <ul className="bg-gray-300 w-60 overflow-hidden">
         <li className="w-60 h-30 bg-gray-400 rounded-xl flex items-center justify-end ">
               <img src="/images/filter.png" alt="" className="h-6 rounded-xl mr-20 ml-1 bg-blue-200 w-auto" />
               
           <button className="p-4 bg-gray-800 text-white">Search</button>
         </li>
      
       <li className="font-aria font-bold p-3 text-aria">People</li>
        
            <li onClick={()=>setContactName(!contactName)} className="bg-gray-100 p-4 ml-1 mr-1  hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                
                {contactName && (<input type="text" placeholder="Contact name" className="w-60 p-1 "/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span className="text-xs text-black font-medium pl-1">Contact Name</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            </li>
             <li onClick={()=>setJobTitle(!jobTitle)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6"> 
                <br></br>
                {jobTitle && (<input type="text" placeholder="Job title" className="w-50"/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               <span className="text-xs text-black font-medium pl-1">Job Title</span>
         
            </li>

             <li onClick={()=>setDepartment(!department)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6"> 
                <br></br>
                {department && (<input type="text" placeholder="department" className="w-50"/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <span className="text-xs text-black font-medium pl-1">Department</span>
         
            </li>
             <li onClick={()=>setContactLocation(!contactLocation)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6"> 
                <br></br>
                {contactLocation && (<input type="text" placeholder="contact Location" className="w-50"/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-xs text-black font-medium pl-1">Contact Location</span>
            </li>
             <li onClick={()=>setSeniority(!seniority)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6"> 
                <br></br>
                {seniority && (<input type="text" placeholder="Seniority" className="w-50"/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               <span className="text-xs text-black font-medium pl-1">Seniority</span>
            </li>
             <li onClick={()=>setSearchType(!searchType)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6"> 
                <br></br>
                {searchType && (<input type="text" placeholder="Search Type" className="w-50"/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                <span className="text-xs text-black font-medium pl-1">Search Type</span>
            </li>
             <li onClick={()=>setExclude(!exclude)} className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6"> 
                <br></br>
                {exclude && (<input type="text" placeholder="Exclude" className="w-50"/>)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                <span className="text-xs text-black font-medium pl-1">Exclude</span>
            </li>
                    <li className="font-aria font-bold p-3 text-aria">Company</li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl  space-x-2 rounded-xl flex flex-col"
                     onClick={() => setShowCompanyName(!showCompanyName)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                         <span className="text-xs text-black font-medium pl-1">CompanyName</span>
                        {/* <div onClick={() => setShowCompanyName(!showCompanyName)}></div> */}
                        {showCompanyName && (
                            <input
                                type="text"
                                placeholder="company name"
                                className="bg-grey-300 rounded"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                onClick={(e) => e.stopPropagation()} />
                        )}
                       
                    </li>
                    <div className="mt-4">{renderComponent()}</div>

                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                        <div onClick={() => setShowHqLocation(!showHqLocation)}></div>

                        {showHqLocation && (<input
                            type="text"
                            placeholder="hq location"
                            className="w-50"
                            value={hqLocation}
                            onChange={(e) => setHqLocation(e.target.value)}
                            onChangeCapture={(e) => e.stopPropagation()}
                        />)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                       <span className="text-xs text-black font-medium pl-1">HQ Location</span>
                    </li>
                    <div className="mt-4">{renderComponent()} </div>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                        <div onClick={() => setShowIndustry(!showIndustry)}></div>
                        {showIndustry && (<label>Industry labels :<input
                            type="text"
                            placeholder="enter industry Label"
                            value={industry}
                            className="w-50"
                            onChange={(e) => setIndustry(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        /></label>)}
                        <br />
                        {showIndustry && (<label>SIC :<br /><input type="text" placeholder="enter industry SIC" className="w-50" /></label>)}
                        {showIndustry && (<label>NAICS :<input type="text" placeholder="enter industry NAICS" className="w-50" /></label>)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                       <span className="text-xs text-black font-medium pl-1">Department</span>
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                        <div onClick={() => setShowRevenue(!showRevenue)}></div>
                        <br></br>
                        {showRevenue && (<input
                            type="text"
                            placeholder="revenvue"
                            className="w-50"
                            value={revenvue}
                            onChange={(e) => setRevenue(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      <span className="text-xs text-black font-medium pl-1">Revenue</span>
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                        <div onClick={() => setShowTechnology(!showTechnology)}></div>
                        {showTechnology && (<input
                            type="text"
                            placeholder="technology"
                            className="w-50"
                            value={technology}
                            onChange={(e) => setTechnology(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                      <span className="text-xs text-black font-medium pl-1">Technology</span>
                     </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                        <div onClick={() => setShowYearFounded(!showYearFounded)}></div>
                        {showYearFounded && <input
                            type="text"
                            placeholder="year founded" className="w-50"
                            value={yearFounded}
                            onChange={(e) => setYearFounded(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                     <span className="text-xs text-black font-medium pl-1">Year Founded</span>
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl flex items-center space-x-6">
                        <div onClick={() => setShowEmpHeadCount(!empHeadCount)}></div>
                        <br></br>
                        {showEmpHeadCount && (<input
                            type="text"
                            placeholder="emp-head-count"
                            className="w-50"
                            value={empHeadCount}
                            onChange={(e) => setEmpHeadCount(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      <span className="text-xs text-black font-medium pl-1">Employee Head Count</span>
                    </li>





                </ul>










    

   </>
}
export default PeopleSearch;
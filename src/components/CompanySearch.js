import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import DashBoard from "./Dashboard";
import SearchNavbar from "./SearchNavbar";
import CompanyName from "../company/CompanyName";
import HqLocation from "../company/HqLocation";
import Industry from "../company/Industry";
import Revenue from "../company/Revenue";
import Technology from "../company/Technology";
import YearFounded from "../company/YearFounded";
import EmployeeHeadCount from "../company/EmployeeHeadCount";
import ContactLocation from "../people/ContactLocation";
import ContactName from "../people/ContactName";
import Department from "../people/Department";
import Exclude from "../people/Exclude";
import JobTitile from "../people/JobTitle";
import SearchType from "../people/SearchType";
import Seniority from "../people/Seniority";
// import DashBoard from "./Dashboard";
// import SearchNavbar from "./SearchNavbar";
// import PeopleSearch from "./PeopleSearch";


function CompanySearch() {
    const [companyName, setCompanyName] = useState("")
    const [showCompanyName, setShowCompanyName] = useState(false)
    const [hqLocation, setHqLocation] = useState("")
    const [showHqLocation, setShowHqLocation] = useState(false)
    const [industry, setIndustry] = useState("")
    const [showIndustry, setShowIndustry] = useState(false)
    const [revenue, setRevenue] = useState("")
    const [showRevenue, setShowRevenue] = useState(false)
    const [technology, setTechnology] = useState("")
    const [showTechnology, setShowTechnology] = useState(false)
    const [yearFounded, setYearFounded] = useState("")
    const [showYearFounded, setShowYearFounded] = useState(false)
    const [empHeadCount, setEmpHeadCount] = useState("")
    const [showEmpHeadCount, setShowEmpHeadCount] = useState(false)

    const [contactName, setContactName] = useState("")
    const [showContactName, setShowContactName] = useState(false)
    const [jobTitle, setJobTitle] = useState("")
    const [showJobtitle, setShowJobtitle] = useState(false)
    const [department, setDepartment] = useState("")
    const [showDepartment, setShowDepartement] = useState(false)
    const [contactLocation, setContactLocation] = useState("")
    const [showContactLocation, setShowContactLocation] = useState(false)
    const [seniority, setSeniority] = useState("")
    const [showSeniority, setShowSeniority] = useState(false)
    const [searchType, setSearchType] = useState("")
    const [showSearchType, setShowSearchType] = useState(false)
    const [exclude, setExclude] = useState("")
    const [showExclude, setShowExclude] = useState(false)

    const renderComponent = () => {
        return <>
            {companyName.trim().length > 0 && <CompanyName />}
            {hqLocation.trim().length > 0 && <HqLocation />}
            {industry.trim().length > 0 && <Industry />}
            {revenue.trim().length > 0 && <Revenue />}
            {technology.trim().length > 0 && <Technology />}
            {yearFounded.trim().length > 0 && <YearFounded />}
            {empHeadCount.trim().length > 0 && <EmployeeHeadCount />}
            {contactLocation.trim().length > 0 && <ContactLocation />}
            {contactName.trim().length > 0 && <ContactName />}
            {department.trim().length > 0 && <Department />}
            {exclude.trim().lenth > 0 && <Exclude />}
            {jobTitle.trim().length > 0 && <JobTitile />}
            {searchType.trim().length > 0 && <SearchType />}
            {seniority.trim().length > 0 && <Seniority />}
        </>
    }
    return <>
        <div >
            <div>
                <DashBoard />
                <SearchNavbar />


                <ul className="bg-purple-200 w-60 space-y-2">
                               <li className="w-60 h-14 bg-gray-50 rounded-xl flex gap-1 items-center justify-between  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="ml-2 h-5 w-5 text-gray-700 hover:cursor-w-resize"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>

                <button className="p-1 bg-purple-500 shadow-lg hover: shadow-2xl shadow/back border-2 border-white  text-white  rounded-md w-20 m-1 ">Search</button>
            </li>

                    <li className="font-aria font-bold p-1 text-aria">Company</li>
                    <li className="bg-purple-200 p-2 hover:bg-purple-100 rounded-xl space-y-1 flex flex-col"
                        onClick={() => setShowCompanyName(!showCompanyName)}
                    >
                        <div className="flex items-center justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">CompanyName</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>


                        {showCompanyName && (
                            
                                <input
                                    type="text"
                                    placeholder="company name"
                                    className="w-50 ml-4 rounded"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    onClick={(e) => e.stopPropagation()} />
                               

                        )}

                    </li>
                   
                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col shadow-lg"
                        onClick={() => setShowHqLocation(!showHqLocation)}
                    >
                    
                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">HQ Location</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>

                        {showHqLocation && (
                        <input
                                type="text"
                                placeholder="hq location"
                                className="w-50 ml-4 rounded"
                                value={hqLocation}
                                onChange={(e) => setHqLocation(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}
                    </li>
                   
                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col shadow-lg"
                        onClick={() => setShowIndustry(!showIndustry)}
                    >
                        <div className="flex items-center justify-between w-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-28 ">Industry</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>

                        </div>

                        {showIndustry && (<label>Industry labels :<input
                            type="text"
                            placeholder="enter industry Label"
                            value={industry}
                            className="w-50 ml-4 rounded"
                            onChange={(e) => setIndustry(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        /></label>)}

                        {showIndustry && (<label>SIC :<br /><input type="text" placeholder="enter industry SIC"
                            value={industry}
                            className="w-50 ml-4 rounded"
                            onChange={(e) => setIndustry(e.target.value)}
                            onClick={(e) => e.stopPropagation()} />
                        </label>)}
                        {showIndustry && (<label>NAICS :<input type="text" placeholder="enter industry NAICS"
                            value={industry}
                            className="w-50 ml-4 rounded"
                            onChange={(e) => setIndustry(e.target.value)}
                            onClick={(e) => e.stopPropagation()} /></label>)}

                    </li>
                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col"
                        onClick={() => setShowRevenue(!showRevenue)}
                    >
                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Revenue</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>


                        {showRevenue && (<input
                            type="text"
                            placeholder="revenvue"
                            className="w-50 ml-4 rounded"
                            value={revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}

                    </li>
                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col"
                        onClick={() => setShowTechnology(!showTechnology)}
                    >

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Technology</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>


                        {showTechnology && (<input
                            type="text"
                            placeholder="technology"
                            className="w-50 ml-4 rounded"
                            value={technology}
                            onChange={(e) => setTechnology(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                    </li>
                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col"
                        onClick={() => setShowYearFounded(!showYearFounded)}
                    >
                        <div className="flex items-center justify-between w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-20">Year Founded</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>

                        </div>

                        {showYearFounded && <input
                            type="text"
                            placeholder="year founded" className="w-50 ml-4 rounded"
                            value={yearFounded}
                            onChange={(e) => setYearFounded(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />}

                    </li>
                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col"
                        onClick={() => setShowEmpHeadCount(!empHeadCount)}
                    >

                        <div className="flex items-center justify-between w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-10 ">Employee Head Count</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>

                        </div>

                        {showEmpHeadCount && (<input
                            type="text"
                            placeholder="emp-head-count"
                            className="w-50 ml-4 rounded"
                            value={empHeadCount}
                            onChange={(e) => setEmpHeadCount(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                    </li>


                    <li className="font-aria font-bold p-3 text-aria">People</li>

                    <li className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col shadow-lg"
                        onClick={() => setShowContactName(!showContactName)}
                    >

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Contact Name</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        {showContactName && (<input
                            type="text"
                            placeholder="Contact name"
                            className="w-50 ml-4 rounded "
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}


                    </li>
                    <li onClick={() => setShowJobtitle(!showJobtitle)} className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col">

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Job Title</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>

                        </div>

                        {showJobtitle && (<input
                            type="text"
                            placeholder="Job title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-50 ml-4 rounded" />)}

                    </li>

                    <li onClick={() => setShowDepartement(!showDepartment)} className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col">

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Department</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>

                        {showDepartment && (<input
                            type="text"
                            placeholder="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-50 ml-4 rounded" />)}

                    </li>
                    <li onClick={() => setShowContactLocation(!showContactLocation)} className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col">

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 ml-1 mr-20">Contact Location</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>

                        {showContactLocation && (<input
                            type="text" placeholder="contact Location"
                            value={contactLocation}
                            onChange={(e) => setContactLocation(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-50 ml-4 rounded" />)}

                    </li>
                    <li onClick={() => setShowSeniority(!showSeniority)} className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col">

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Seniority</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>


                        {showSeniority && (<input type="text"
                            placeholder="Seniority"
                            value={seniority}
                            onChange={(e) => setSeniority(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-50 ml-4 rounded" />)}

                    </li>
                    <li onClick={() => setShowSearchType(!showSearchType)} className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col">

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Search Type</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>

                        {showSearchType && (<input
                            type="text"
                            placeholder="Search Type"
                            className="w-50 ml-4 rounded"
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}

                    </li>
                    <li onClick={() => setShowExclude(!showExclude)} className="bg-gray-100 p-2 hover:bg-gray-500 rounded-xl space-y-1 flex flex-col">

                        <div className="flex items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            <span className="text-xs text-black font-medium pl-1 mr-24">Exclude</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>

                        {showExclude && (<input
                            type="text"
                            placeholder="Exclude"
                            value={exclude}
                            onChange={(e) => setExclude(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-50 ml-4 rounded" />)}

                    </li>





                </ul>

            </div>
        </div>
    </>
}

export default CompanySearch;
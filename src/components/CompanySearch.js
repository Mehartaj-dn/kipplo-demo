import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "./Dashboard";
import SearchNavbar from "./SearchNavbar";
import CompanyName from "../company/CompanyName";
import HqLocation from "../company/HqLocation";
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
        <div >
            <div>
                <DashBoard />
                <SearchNavbar />


                <ul className="bg-gray-300 w-60">
                    <li className="w-60 h-30 bg-gray-400 rounded-xl flex items-center justify-end ">
                        <img src="/images/filter.png" alt="" className="h-6 rounded-xl mr-20 ml-1 bg-blue-200 w-auto" />

                    </li>
                    <li className="font-aria font-bold p-3 text-aria">Company</li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowCompanyName(!showCompanyName)}>Company Name</div>
                        {showCompanyName && (
                            <input
                                type="text"
                                placeholder="company name"
                                className="bg-pink-300"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                onClick={(e) => e.stopPropagation()} />
                        )}

                    </li>
                    <div className="mt-4">{renderComponent()}</div>

                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowHqLocation(!showHqLocation)}>HQ location</div>

                        {showHqLocation && (<input
                            type="text"
                            placeholder="hq location"
                            className="w-50"
                            value={hqLocation}
                            onChange={(e) => setHqLocation(e.target.value)}
                            onChangeCapture={(e) => e.stopPropagation()}
                        />)}
                    </li>
                    <div className="mt-4">{renderComponent()} </div>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowIndustry(!showIndustry)}>Industry</div>
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
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowRevenue(!showRevenue)}>Revenue</div>
                        <br></br>
                        {showRevenue && (<input
                            type="text"
                            placeholder="revenvue"
                            className="w-50"
                            value={revenvue}
                            onChange={(e) => setRevenue(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowTechnology(!showTechnology)}>Technology</div>
                        {showTechnology && (<input
                            type="text"
                            placeholder="technology"
                            className="w-50"
                            value={technology}
                            onChange={(e) => setTechnology(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowYearFounded(!showYearFounded)}>Year Founded</div>
                        {showYearFounded && <input
                            type="text"
                            placeholder="year founded" className="w-50"
                            value={yearFounded}
                            onChange={(e) => setYearFounded(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />}
                    </li>
                    <li className="bg-gray-100 p-3 hover:bg-gray-500 rounded-xl">
                        <div onClick={() => setShowEmpHeadCount(!empHeadCount)}>Employee Head Count</div>
                        <br></br>
                        {showEmpHeadCount && (<input
                            type="text"
                            placeholder="emp-head-count"
                            className="w-50"
                            value={empHeadCount}
                            onChange={(e) => setEmpHeadCount(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />)}
                    </li>





                </ul>

            </div>
        </div>
    </>
}

export default CompanySearch;
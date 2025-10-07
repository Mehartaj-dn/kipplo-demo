import DashBoard from "./Dashboard";
import SearchNavbar from "./SearchNavbar";

const MyList =()=>{
    return<>
    <DashBoard />
    <SearchNavbar />
    <div className="flex items-center justify-between">
    <div className="flex items-center justify-start">
        <button className="bg-purple-100 ml-4 shadow-lg border-2 border-white m-2 rounded-xl p-2 hover:bg-gray-200">People</button>
        <button className="bg-purple-100 shadow-lg border-2 border-white rounded-xl p-2 hover:bg-gray-200">Companies</button>
        
        </div>
        <div>
            <button className="bg-gray-50 border-2 border-white p-2 shadow-lg space-x-6 rounded-xl">refresh</button>
        <input className="p-1 rounded-xl border-2 border-white shadow-lg" type="search" placeholder="search any thing" />
        </div>
        </div>
        
        
    </>
}
    
export default MyList;
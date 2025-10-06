import DashBoard from "./Dashboard";
import SearchNavbar from "./SearchNavbar";

const MyList =()=>{
    return<>
    <DashBoard />
    <SearchNavbar />
    <div className="flex items-center justify-between">
    <div className="flex items-center justify-start">
        <button className="bg-gray-100 border-2 border-black m-2 rounded-xl p-2 hover:bg-gray-200">People</button>
        <button className="bg-gray-100 border-2 border-black rounded-xl p-2 hover:bg-gray-200">Companies</button>
        
        </div>
        <div>
            <button className="bg-gray-100 border-2 border-black p-1 space-x-6 rounded-xl">refresh</button>
        <input className="p-1" type="search" placeholder="search any thing" />
        </div>
        </div>
        
        
    </>
}
    
export default MyList;
import DashBoard from "./Dashboard";

const ViewPlans =()=>{
    return<>
    <DashBoard />
    <div className="bg-gray-300  rounded-xl h-4/5 m-2">
        <button className="bg-gray-400 m-2 p-2 rounded-xl"><a href="/" >--Back to Dashboard</a></button>
        <h1 className="m-6 font-bold"> Simple, Transparent pricing</h1>
        <div className=" bg-gray-200 mr-96 rounded-xl flex items-center">
            <button className="bg-blue-300 p-2 m-2 rounded-xl">Monthly Billing</button>
            <button className="bg-blue-300 p-2 m-2 rounded-xl">Annual Billing</button>
        </div>
        <div className="bg-blue-200 flex items-center justify-between space-x-4 p-46 m-10">
            <div className="bg-indigo-300 p-40 mr-2 hover:bg-gray-300 rounded-xl shadow-lg">plan 1</div>
            <div className="bg-indigo-300 p-40 mr-2 hover:bg-gray-300 rounded-xl shadow-lg" >plan 2</div>
            <div className="bg-indigo-300 p-40 mr-2 hover:bg-gray-300 rounded-xl shadow-lg">plan 3</div>
        </div>

    </div>
    </>
}
export default ViewPlans;
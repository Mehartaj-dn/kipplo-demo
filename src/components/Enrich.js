import DashBoard from "./Dashboard";


const Enrich =()=>{
    return <>
    <DashBoard />
     <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 enrich-list ">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">CSV Enrichment</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">API Enrichment</a>
                </div>
    </div>
    </>
}
export default Enrich;
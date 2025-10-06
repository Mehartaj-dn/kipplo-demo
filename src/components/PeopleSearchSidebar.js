import DashBoard from "./Dashboard";
import PeopleSearch from "./PeopleSearch";
import SearchFieldHeader from "./SearchFieldHeader";
import SearchNavbar from "./SearchNavbar";


const PeopleSearchSidebar =()=>{
    return<>
    <DashBoard />
    <SearchNavbar />
    <SearchFieldHeader />
    <PeopleSearch />
    </>
}
export default PeopleSearchSidebar;
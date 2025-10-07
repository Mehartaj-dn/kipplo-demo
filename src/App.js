
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import DashBoard from './components/Dashboard';
import Search from './components/Search';
import PeopleSearch from './components/PeopleSearch';
import SearchNavbar from './components/SearchNavbar';
import CompanySearch from './components/CompanySearch';
import IndustryItem from './components/IndustryItem';
import MyList from './components/MyLists';
import RevealedContacts from './components/RevealedContacts';
import ViewPlans from './components/ViewPlans';
// import ScheduleDemo from './nav-components/ScheduleDemo';
import ScheduleDemo from './components/ScheduleDemo';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BookingSlots from './components/BookingSlots';

import CompanyName from './company/CompanyName';
import Enrich from './components/Enrich';
// import ScheduleCalender from './components/ScheduleCalender';



function App() {
  return (
    <>
   
    <Router>
      
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/search" element={<Search />}/>
        <Route path='/people-search' element={<PeopleSearch />}/>
        <Route path='/search-navbar' element={<SearchNavbar />}/>
        <Route path='/company-search' element={<CompanySearch />}/>
        <Route path='/ind-item' element={<IndustryItem />}/>
        <Route path='/my-list' element={<MyList />}/>
        <Route path='/revealed-contacts' element = {<RevealedContacts/>}/>
        <Route path='/view-plans' element={<ViewPlans/>} />
        <Route path='/schedule-demo' element={<ScheduleDemo />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/book-slot' element={<BookingSlots />}/>
        {/* <Route path='/schedule-calender' element={<ScheduleCalender />}/> */}
        <Route path='/people-search' element={<PeopleSearch/>}/>
        <Route path='/company-search' element={<CompanySearch/>}/>
        <Route path='company-name' element={<CompanyName/>}/>
        <Route path='/enrich' element={<Enrich/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

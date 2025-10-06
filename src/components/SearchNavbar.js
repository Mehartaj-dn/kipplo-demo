

function SearchNavbar (){
    return<>
    <nav>
       <div className="bg-gray-200 p-5 mt-1 rounded-xl">
         <ul className="font-bold flex items-center justify-center space-x-40">
            <li><a href="/people-search-sidebar">People Search</a></li>
            <li><a href="/company-search">Company Search</a></li>
            <li> <a href="/revealed-contacts">Revealed Contacts</a> </li>
            <li> <a href="/my-list">My list</a> </li>
        </ul>
       </div>
    </nav>
    </>
}
export default SearchNavbar;
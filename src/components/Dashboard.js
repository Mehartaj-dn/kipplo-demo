
import Enrich from "./Enrich";
import Search from "./Search";



const DashBoard = () =>{
    return <>
{/*     
 <!-- Include this script tag or install `@tailwindplus/elements` via npm: --> */}
{/* 
<script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>  */}
<nav className="relative bg-gray-50  py-1">
  <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src="/images/Logo.jpeg" className="h-8 w-auto" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href= "/" aria-current="page" className="rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-black">Dashboard</a>
            <a  href="/search" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-purple/5 hover:text-purple" >Search</a>

            <a href="/enrich" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-purple/5 hover:text-purple">Enrich</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button type="button" className="login-btn">
        <a href="/schedule-demo" className="text-sm/8 font-semibold text-gray-900 schedule-btn bg-purple-50 p-3 rounded-2xl mr-2 hover:shadow-lg shadow-black border-2 border-white">Schedule Demo<span aria-hidden="true">&rarr;</span></a>
        </button>
        <button type="button" className="login-btn">
        <a href="/view-plans" className="text-sm/6 font-semibold text-gray-900 rounded-2xl bg-purple-300 p-3 hover:shadow-lg shadow-black border-2 border-white ">View Plans<span aria-hidden="true">&rarr;</span></a>
        </button>
         <el-dropdown class="relative ml-3">
          <button className="relative p-4 flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
          </button>
          <button className="mb-8"><a href="/login"  > 
          <img src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" alt="" className="ml-2 size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          </a></button>
           </el-dropdown>
    </div>
    



      </div>
    </div>
  </div>

  
</nav>


    </>
}
export default DashBoard;

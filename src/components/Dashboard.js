
import Enrich from "./Enrich";
import Search from "./Search";



const DashBoard = () =>{
    return <>
{/*     
 <!-- Include this script tag or install `@tailwindplus/elements` via npm: --> */}
{/* 
<script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>  */}
<nav className="relative bg-gray-100">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src="/images/Logo.jpeg" className="h-8 w-auto" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href= "/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
            <a  href="/search" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/5 hover:text-white" >Search</a>

            <a href="/enrich" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white/5 hover:text-white">Enrich</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="relative rounded-full p-1 text-gray-900 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          
        </button>
        <button type="button" className="relative rounded-full p-1 text-gray-900 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          
        </button>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button type="button" className="login-btn">
        <a href="/schedule-demo" className="text-sm/8 font-semibold text-gray-900 schedule-btn">Schedule Demo<span aria-hidden="true">&rarr;</span></a>
        </button>
        <button type="button" className="login-btn">
        <a href="/view-plans" className="text-sm/6 font-semibold text-gray-900">View Plans<span aria-hidden="true">&rarr;</span></a>
        </button>
         <el-dropdown class="relative ml-3">
          <button className="relative p-4 flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
          </button>
          <button><a href="/login"  > 
          <img src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" alt="" className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          profile 
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

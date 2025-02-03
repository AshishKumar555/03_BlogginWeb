import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-evenly gap-4 p-4 bg-gray-800 text-white">
      
      
      <ul class="flex gap-10 justify-around">
              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <Link to="/">Home</Link>
                 <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                 transition all duration-200 "></div>
              </li>

              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <Link to="/create-blog">Create Blog</Link>
                 <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                 transition all duration-200 "></div>
              </li>

              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <a href="#">About</a>
                
              </li>

              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <a href="#">Login</a>
                
              </li>

              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <a href="#">SignUp</a>
                 <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                 transition all duration-200 "></div>
              </li>

              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <a href="#">Support</a>
                 <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                 transition all duration-200 "></div>
              </li>

              <li class="text-white font-mullish py-7 hover:text-lightBlue 
              cursor-pointer transition-all duration-200 relative group hidden lg:block">
                 <a href="#">pricing</a>
                 <div class="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
                 transition all duration-200 "></div>
              </li>
             
          </ul>
    </nav>
  );
}

export default NavBar;
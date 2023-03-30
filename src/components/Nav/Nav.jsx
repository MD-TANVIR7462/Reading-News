import React from 'react';

const Nav = () => {
   return (
      <div>
         <nav className="bg-pink-200 mb-2 border-gray-200 dark:bg-gray-900 rounded-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <p className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black-900">Knowledge Cafe</span>
  </p>
  <div>
    <ul className='flex gap-14 text-black font-bold ' >
      <li className=' hover:text-pink-800'>Home</li>
      <li className=' hover:text-pink-800'>Menu</li>
      <li className=' hover:text-pink-800'>Contact</li>
    </ul>

  </div>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        
          <img  className="w-10 h-10 rounded-full" src="../public/user (1).png" alt="" />
      </button>
     
    

  </div>
  
  </div>
</nav>
      </div>
   );
};

export default Nav;
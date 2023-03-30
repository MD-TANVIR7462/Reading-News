import React, { useEffect, useState } from 'react';
import SingelBlog from '../Singel-Blog/SingelBlog';

const Main = () => {
   const [users,setUsers] = useState([])
   useEffect(()=>{
      fetch('users.json')
      .then(res=>res.json())
      .then(data=>setUsers(data))
   },[])
   return (
      <div className='grid md:grid-cols-3 gap-5 '>


         <div className='md:col-span-2  '>
            {
               users.map(user=><SingelBlog user={user}></SingelBlog>)
            }

         </div>


         <div className='md:col-span-1'>


            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              
            </div>

         </div>


      </div>
   );
};

export default Main;
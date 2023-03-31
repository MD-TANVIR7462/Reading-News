import React, { useEffect, useState } from 'react';
import SideCart from '../side-Chart/SideCart';
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


         <div className='md:col-span-1 '>


          <SideCart></SideCart>
         </div>


      </div>
   );
};

export default Main;
import React, { useEffect, useState } from 'react';
import SideCart from '../side-Chart/SideCart';
import SingelBlog from '../Singel-Blog/SingelBlog';


const Main = () => {
   const [users, setUsers] = useState([])
   const [selectedBlogs, setselectedBlogs] = useState([])
   let [time, setTime] = useState(0)
   useEffect(() => {
      fetch('users.json')
         .then(res => res.json())
         .then(data => setUsers(data))
   }, [])

   const setChartDetailes = (valus) => {
      const newBlog = [...selectedBlogs, valus]
      setselectedBlogs(newBlog)

   }

   const timer = (props) => {

      const newTime = time + props
      setTime(newTime)

   }

   return (
      <div className='grid md:grid-cols-3 gap-5 '>


         <div className='md:col-span-2  '>
            {
               users.map(user => <SingelBlog user={user} key={user.id} setChartDetailes={setChartDetailes} timer={timer}></SingelBlog>)
            }

         </div>


         <div className='md:col-span-1 '>
            <SideCart selectedBlogs={selectedBlogs} time={time} ></SideCart>
         </div>


      </div>
   );
};

export default Main;
import React, { useEffect, useState } from 'react';
import SideCart from '../side-Chart/SideCart';
import SingelBlog from '../Singel-Blog/SingelBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
   const [users, setUsers] = useState([])
   const [selectedBlogs, setselectedBlogs] = useState([])
   let [time, setTime] = useState(0)
   useEffect(() => {
      fetch('users.json')
         .then(res => res.json())
         .then(data => setUsers(data))
   }, [])




   // const setChartDetailes = (valus) => {
   //    console.log(valus.id)


   //    const newBlog = [...selectedBlogs, valus]
   //    newBlog.map(n=>tostify(n.id)  )

   //    function tostify(id){ 
   //       //   console.log(id)
   //         let toastify = selectedBlogs.find(ExistBlog=>ExistBlog.id === id)
   //         console.log(toastify)
   //         if(toastify){
   //          // setselectedBlogs(newBlog)
   //          return toast("Wow so easy!")


   //         }
   //         else{ setselectedBlogs(newBlog)

   //         }

   //       }

   // }
   const setChartDetailes = (valus) => {
      // console.log(valus.id)
      const exixst = selectedBlogs.find(element => element.id === valus.id)

      if (exixst) {
         return toast.warn("Blog Is Already Bookmarked!")
      }
      else {
         const newBlog = [...selectedBlogs, valus]
         setselectedBlogs(newBlog)
      }


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
            <SideCart selectedBlogs={selectedBlogs} time={time} key={selectedBlogs.id}></SideCart>
         </div>

         <ToastContainer position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />
      </div>
   );
};

export default Main;
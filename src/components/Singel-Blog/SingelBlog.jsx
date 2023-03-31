import React, { useState } from 'react';
const SingelBlog = (props) => {
   const { id, Authorname, BlogTitle, Publishdate, Readtime, Authorimg, BlogCoverImg } = props.user


const setChartDetailes=props.setChartDetailes

function timer (){
   console.log('dkjflsdlkj')
}


   return (

      <div class="max-w-2xl mb-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

         <img class="rounded-t-lg" src={BlogCoverImg} alt="" />

         <div class="p-5">
            <div className='flex justify-between'>
            <p className='flex gap-4 items-cente mb-5'>
               <img className="w-10 h-10 rounded-full" src={Authorimg} alt="" />
               <span>  <p className='font-bold'>{Authorname}</p>
                  <p className='text-xs font-semibold text-slate-700'>{Publishdate}</p></span>

            </p>
            <p className='flex items-center'>
            <span className='text-slate-700 mr-2'>{Readtime} min read</span> 
              
               <button type="button" class="p-2 text-gray-900 focus:outline-none hover:bg-pink-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "  onClick={()=>setChartDetailes(props.user)}> <img  className='w-5 h-4 ' src="../../../public/bookmark-regular.svg" alt=""  /></button>
            </p>
           


            </div>
            <h5 class="mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{BlogTitle}  
            </h5>

            <button type="button" class="focus:outline-none text-blue-800  font-medium rounded-lg text-sm  px-1  hover:bg-purple-200  py-2.5 mb-2 "> <span className='underline font-bold'onClick={timer } >Mark as read</span></button>

         </div>
      </div>

   );
};

export default SingelBlog;
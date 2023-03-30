import React from 'react';

const SingelBlog = (props) => {
   const { id, Authorname, BlogTitle, Publishdate, Readtime, Authorimg, BlogCoverImg } = props.user
   return (

      <div class="max-w-2xl h- bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

         <img class="rounded-t-lg" src={BlogCoverImg} alt="" />

         <div class="p-5">
            <p className='flex gap-4'>
               <img className="w-10 h-10 rounded-full" src={Authorimg} alt="" />
               <span>  <p className='font-bold'>{Authorname}</p>
                  <p>{Publishdate}</p></span>

            </p>

            <h5 class="mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{BlogTitle}</h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

         </div>
      </div>

   );
};

export default SingelBlog;
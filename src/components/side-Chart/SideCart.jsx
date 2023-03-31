import React from 'react';
import SingleBook from '../singleBookmark/SingleBook';
const SideCart = (props) => {
   const Bookmarked = props.selectedBlogs

   const BookmarkedLength = Bookmarked.length

   return (
      <div>

         <p className=' class="w-full  p-4    bg-purple-200 border-2 border-purple-400 rounded-lg  shadow-md text-center font-bold text-lg text-purple-700 "'>

         Spent time on read :{}

         </p>

         <div className=' class="w-full  p-4     bg-slate-100 border border-gray-300 rounded-lg  shadow-md text-center font-bold text-lg text-black "'>
            <p>Bookmarked Blogs :{BookmarkedLength}
               <p className='text-xs my-2'>click The Bookmark Button to add BLogs</p>

            </p>
            {
               Bookmarked.map(SingleBookmarked => <SingleBook SingleBookmarked={SingleBookmarked} ></SingleBook>)
            }

         </div>
      </div>
   );
};

export default SideCart;
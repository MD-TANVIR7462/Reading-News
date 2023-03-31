import React from 'react';

const SideCart = (props) => {
const Bookmarked = props.selectedBlogs
console.log([props.selectedBlogs])
const BookmarkedLength=Bookmarked.length

   return (
      <>
       <div class="w-full  p-4   rounded-md  bg-white border border-gray-300rounded-lg  shadow-md text-center font-bold text-lg text-purple-950 ">Bookmarked Blogs :{BookmarkedLength}
              
       </div>
       {
   
       }
  
      </>
   );
};

export default SideCart;
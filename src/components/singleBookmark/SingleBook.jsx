import React from 'react';

const SingleBook = (props) => {


   return (

      <p className="w-full     bg-white border rounded-lg text-left p-3 font-bold text-sm md:text-lg text-black">{props.SingleBookmarked.BlogTitle}

      </p>

   );
};

export default SingleBook;
import React from 'react';

const Question = () => {
   return (
      <div className='my-3'>


         
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-purple-200 border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-lg text-purple-700 '>
            what is the deference beetween props and state in react??
            </p>
            

            <p class="mb-5 p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">props (short for properties) are used to pass data from a parent component to a child component. They are immutable, meaning they cannot be modified within the child component. The data passed down via props can be any JavaScript data type, including strings, numbers, booleans, objects, or even functions..</p>
            <p class="mb-3 p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">state is used to manage the internal data and state of a component. It is mutable, meaning it can be modified within the component using the setState() method. When the setState() method is called, it triggers a re-render of the component and its children. Changes to state should be done carefully and in a way that maintains the integrity of the component and its rendered output.</p>
         


           
         </div>
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-purple-200  border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-lg text-purple-700 '>
            How useState works in React??
            </p>
            

            <p class="mb-3 p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">The useState is a built-in React hook that allows a functional component to have state. It works by returning an array with two values: the current state value and a function that can be used to update that value,useState hook is used to initialize the count state to zero. The setCount function can be used to update the state value, which is then reflected in the component's rendered output. ...</p>
           
         


           
         </div>
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-purple-200  border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-lg text-purple-700 '>
         What can we do by useEffect in React??
            </p>
            

            <p class="mb-3 p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">The useEffect hook in React is used to perform side effects in a functional component, such as fetching data, subscribing to events, or updating the DOM. However, it can also be used for other purposes, such as:
            <p className='mt-5 '>
            <li className='mb-2 '>Updating the document title: You can use useEffect to update the document title based on the state of your component, by calling the document.title property inside the effect function.</li>
            <li className='mb-3'>Managing timers and intervals: You can use useEffect to create and manage timers and intervals, by calling setTimeout and setInterval inside the effect function.</li>
            <li>Cleaning up after a component: You can use useEffect to perform cleanup after a component is unmounted, by returning a cleanup function from the effect function.</li></p>
            
            </p>
           
         


           
         </div>
<div className='"max-w-2xl mb-4 p-4  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"'>
            <p className='text-center bg-purple-200  border-2 border-purple-400 rounded-lg  shadow-md w-4/6 mb-2 m-auto font-bold text-lg text-purple-700 '>
            How Does React Works??
            </p>
            

            <p class="mb-3 p-4 rounded-lg text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left bg-gray-100">React is a JavaScript library for building user interfaces. It works by using a virtual DOM (Document Object Model) to efficiently render components based on changes in state or props.
            <p className='mt-5 '>
            <li className='mb-2 '>Components: React applications are built using components, which are modular, reusable pieces of code that define the structure and behavior of a user interface.</li>
            <li className='mb-3'>JSX: React uses a syntax extension called JSX, which allows you to write HTML-like code in your JavaScript files.</li>
            <li className='mb-3'>Virtual DOM: React uses a virtual DOM to keep track of the state of the UI, and efficiently render changes to the DOM when the state or props of a component change.</li>
            <li>Rendering: When a component is rendered, React creates a virtual representation of the component's DOM structure, and compares it to the previous representation to determine what needs to be updated.</li></p>
            
            </p>
           
         


           
         </div>





         

      </div>
   );
};

export default Question;
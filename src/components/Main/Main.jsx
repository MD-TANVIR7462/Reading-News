import React from 'react';

const Main = () => {
   return (
      <div className='grid md:grid-cols-3 gap-5 '>
         <div className='md:col-span-2  '>


            <div class="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <a href="#">
                  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
               </a>
               <div class="p-5">
                  <a href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                     <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
               </div>
            </div>

         </div>
         <div className='md:col-span-1'>


            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
               <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                  <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                     View all
                  </a>
               </div>
               <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           <div class="flex-shrink-0">
                         
                           </div>
                           <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                 Neil Sims
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                 email@windster.com
                              </p>
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $320
                           </div>
                        </div>
                     </li>
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           <div class="flex-shrink-0">
                          
                           </div>
                           <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                 Bonnie Green
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                 email@windster.com
                              </p>
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $3467
                           </div>
                        </div>
                     </li>
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           <div class="flex-shrink-0">
                            
                           </div>
                           <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                 Michael Gough
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                 email@windster.com
                              </p>
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $67
                           </div>
                        </div>
                     </li>
                     <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                           <div class="flex-shrink-0">
                            
                           </div>
                           <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                 Lana Byrd
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                 email@windster.com
                              </p>
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $367
                           </div>
                        </div>
                     </li>
                     <li class="pt-3 pb-0 sm:pt-4">
                        <div class="flex items-center space-x-4">
                           <div class="flex-shrink-0">
                             
                           </div>
                           <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                 Thomes Lean
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                 email@windster.com
                              </p>
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $2367
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>

         </div>


      </div>
   );
};

export default Main;
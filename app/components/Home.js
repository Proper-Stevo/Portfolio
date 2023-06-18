import React from "react"

function Home() {
    return (
        <div className="backgroundOne">
        <div class="flex justify-center ">
          <div class="ml-6 flex w-16 space-y-10 py-6">
              <ul>
                <li class="p-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                    <path   d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </li>
                <li class="p-5">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
                    <path   d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </li>
                <li class="p-5">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
                    <path  stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </li>
                <li class="p-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
                    <path stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
};

export default Home


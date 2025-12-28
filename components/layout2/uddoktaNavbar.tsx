import Link from 'next/link';
import React from 'react'

const UddoktaNavbar = () => {
    const items = [
         { name: "Item 1", slug: "university/brac-university" },
         { name: "Item 2", slug: "university/daffodil-university" }, 
         { name: "Item 3", slug: "university/east-west-university" }, ];
  return (
    <div>
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Company Logo</span>
        </a>

        <div className='flex justify-start'> 
            {items.map((item, index) => (
                <Link key={index} href={`/uddokta_101/${item.slug}`} className="text-gray-700 hover:bg-gray-50 border-b-2 border-transparent hover:border-blue-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2">
                    {item.name}
                </Link>
            )
                )}
            
        </div>
        
       
    </div>
</nav>

{/* <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script> */}
    </div>
  )
}

export default UddoktaNavbar;
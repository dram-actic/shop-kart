import React from 'react'

export default function Header() {

    const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
            { name: 'Product 1', id: 'p1'},
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3'},
            { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
        ];
        
  return (
    <header className="w-full h-auto  bg-black">
        <div className="flex flex-col justify-center">
        <div className="flex justify-between items-end px-4 lg:mx-[2.5rem]">
            <div className="text-white text-3xl md:text-4xl font-light">ShopKart</div>
            <div className="hidden md:flex text-white font-semibold text-lg md:text-sm space-x-2">
                <div className="cursor-pointer">WISHLIST (0)</div>
                <div className="cursor-pointer">BAG (0)</div>
            </div>
            <div className="md:hidden text-white text-3xl">
                <a href="#">&#8801;</a>
            </div>
        </div>
        <div className="w-auto h-1 mt-1 border-b-[1px] border-white rounded-sm mx-[1.5rem] lg:mx-16"></div>
        </div>
        <div>
           <p className='text-white'>heloo</p>
        </div>
    </header>
  )
}

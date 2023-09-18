import React from 'react'
import jessica from '../assests/jessica.png'

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
                <div className="text-white text-3xl md:text-4xl font-light hover:cursor-pointer">ShopKart</div>
                <div className="hidden md:flex text-white font-semibold md:text-sm gap-3">
                    <div className="cursor-pointer">WISHLIST (0)</div>
                    <div className="cursor-pointer">BAG (0)</div>
                </div>
                <div className="md:hidden text-white text-3xl">
                    <a href="#">&#8801;</a>
                </div>
            </div>
            <div className="w-auto h-1 mt-1 border-b-[1px] border-white rounded-sm mx-[1.5rem] lg:mx-16"></div>
        </div>
        <nav className="mt-2 hidden md:block">
            <ul className="flex justify-evenly md:pr-32 text-lg font-medium break-word text-white uppercase">
                {navbar.map((item) => (
                    <li key={item.id} className="relative group">
                        <a href={`#${item.id}`} className="text-white transition duration-300 ease-in-out">
                            {item.name}
                        </a>
                        {item.child && (
                            <ul className="absolute left-0 hidden group-hover:block bg-transparent border border-white py-2 space-y-2">
                                {item.child.map((subItem) => (
                                    <li key={subItem.id}>
                                    <a href={`#${subItem.id}`} className="text-white text-sm font-light transition duration-300 ease-in-out pr-5 py-1 block">
                                        {subItem.name}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
      </nav>
      <div>
       <img src={jessica} alt="model" className="max-w-sm"/>
      </div>
    </header>
  )
}

import React from "react";

const Navbar = () => (
    <div className="p-2 container mx-auto flex justify-between items-center">
        <div className="text-xl flex items-center">
            <i className="fab fa-ethereum bg-gray-900 text-white rounded-full w-12 h-12 p-3 m-2 text-center"/>
            <p className="font-bold">Patron</p>
        </div>
        <div className="text-medium pr-4">
        <i className='fas fa-user' />
        </div>
    </div>
);

export default Navbar;
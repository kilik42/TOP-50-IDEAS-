import React from 'react'
import logo from './../../assets/download.jpg'
function Header() {
  return (
    <div>
        <button className='btn btn-primar btn-sm md:btn-md'>
                + new idea
        </button>
        <h2 className="font-bold text-sm md:text-2xl"> header</h2>    

        <div>
            <img 
            src={logo}
            className='w-10 h-10 md:w-20 md:h-20 rounded-full'
            />
            <h2>By Tube</h2>
        </div>
    </div>


  )
}

export default Header
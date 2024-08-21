import React from 'react'
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <div className="flex bg-[#261711] h-[100px] w-[100vw]">
      <div className="h-[100px] w-[100px] my-auto ml-4">
        <img src={logo} alt="img" />
      </div>
      <div className="flex my-auto gap-2 text-3xl lg:ml-5">
        <h1 className="text-[#F2D64B] font-custom">HAWKEYE</h1>
        <h1 className="text-[#ADF2A2] font-custom">CALLS</h1>
      </div>
    </div>
  )
}

export default Navbar

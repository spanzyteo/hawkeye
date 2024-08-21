import React from 'react'
import logo from '/logo.png'

const Navbar = () => {
  return (
    <div className="flex bg-[#261711] h-[100px] w-[100vw] items-center">
      <div className="h-[100px] w-[100px] my-auto ml-2 sm:ml-4 mt-2 sm:mt-0">
        <img src={logo} alt="img" />
      </div>
      <div className="flex items-center gap-2 text-[2.6rem]">
        <h1 className="text-[#F2D64B] font-custom">HAWKEYE</h1>
        <h1 className="text-[#ADF2A2] font-custom mr-2 sm:mr-0">CALLS</h1>
      </div>
    </div>
  )
}

export default Navbar

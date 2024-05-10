import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center mx-auto">
          <div className="hidden lg:flex gap-1">
            <div className="header-top-icon-wrapper">
              <BsFacebook />
            </div>
            <div className="header-top-icon-wrapper">
              <BsTwitter />
            </div>
            <div className="header-top-icon-wrapper">
              <BsInstagram />
            </div>
            <div className="header-top-icon-wrapper">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <strong>FREE SHIPPING </strong>
            THIS WEEK ORDER OVER -$55
          </div>
          <div className="flex gap-4"> 
            <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
              <option value="usd">USD $</option>
              <option value="eur">EUR $</option>
              <option value="rs">PKR Rs</option>
            </select>

            <select name="langugae" id="language"
            className="text-gray-500 text-[12px] w-[70px]">
              <option value="eng">ENG</option>
              <option value="urdu">URDU</option>
              <option value="hindi">HINDI</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;

import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <strong>FREE SHIPPING</strong>
            THIS WEEK ORDER OVER -$55
          </div>
          <div>
            <select name="currency" id="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR $</option>
              <option value="rs">PKR Rs</option>
            </select>

            <select name="langugae" id="language">
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

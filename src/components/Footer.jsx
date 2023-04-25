import React from 'react';
import twtIcon from '../assets/twitter-icon.png';
import instaIcon from '../assets/ig-icon.png';
import fbIcon from '../assets/fb-icon.png'

const Footer = () => {
  return (
    <footer>
      <div className="border-b-2 border-black py-16 px-10 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-2xl">MonoNote</h2>
          <p>The Ultimate digital notepad</p>
        </div>

        <div className="flex items-start justify-between gap-10">
          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="pb-4 font-semibold">Product</h3>
            <a href="">Get Started</a>
            <a href="">Pricing</a>
            <a href="">FAQs</a>
          </div>

          <div className="flex flex-col items-start justify-center gap-2">
            <h3 className="pb-4 font-semibold">Company</h3>
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Contact Us</a>
          </div>

          <div>
            <h3 className="pb-4 font-semibold">Connect with us</h3>

            <div className="flex justify-around items-center ">
              <a href="https://instagram.com">
                <img src={instaIcon} />
              </a>
              <a href="https://twitter.com">
                <img src={twtIcon} />
              </a>
              <a href="https://facebook.com">
                <img src={fbIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <p className="text-center"> &copy; 2023. All rights duly reserved</p>
      </div>
    </footer>
  );
}

export default Footer
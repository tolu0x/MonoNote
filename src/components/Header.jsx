import { useState } from 'react';
import Hamburger from "./Hamburger";
import logo from "../assets/MonoNote.png";

function Header(){

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header className="border-b border-black fixed top-0 left-0 right-0 nav-blur sm:py-2">
      <nav className="flex items-center justify-between px-8 py-2">
        <div>
          <a href="#">
            <img src={logo} loading="lazy" alt="MonoNote" />
          </a>
        </div>

        <Hamburger handleClick={handleClick} open={open} />

        <ul
          className={`${open ? "active" : null} flex items-center justify-center gap-5 md:w-[64%] lg:w-max menu glass `}
          role="navigation"
        >
          <li>
            <a href="#" onClick={handleClick}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick}>Blog</a>
          </li>
          <li>
            <a href="#" onClick={handleClick} className="bg-black rounded-xl px-6 py-4 text-white mt-2 block hover:bg-white hover:text-black">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
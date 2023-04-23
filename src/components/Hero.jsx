import React from 'react';
import heroImg from "../assets/notes.png"

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center items-center py-4 border-black border-b-2">
        <div>
          <h1 className="font-medium text-3xl w-[32rem] pb-3">
            Simplify your life with <span className="font-bold">MonoNote</span>;
            The ultimate digital notepad
          </h1>
          <p className="w-[28rem]">
            Stay organized, on-task and on-the-go with our sleek, easy to use
            notepad
          </p>
          <div className="flex items-center justify-start gap-3 mt-3">
            <a
              href=""
              className="bg-black rounded-xl px-2 w-32 text-center inline-block py-3 text-white hover:bg-white hover:text-black"
            >
              Get Started
            </a>
            <a
              href=""
              className="border border-black border-2 rounded-xl inline-block px-2 w-32 text-center py-3 hover:bg-black hover:text-white"
            >
              Login
            </a>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="MonoNote" />
        </div>
      </div>
    </section>
  );
}

export default Hero
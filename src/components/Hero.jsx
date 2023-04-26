import React from 'react';
import heroImg from "../assets/notes.png"

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center items-center pt-24 sm:pt-32 pb-4 border-black border-b-2 sm:flex-col sm:pt-20">
        <div className="lg:pl-0 md:pl-9 sm:px-7">
          <h1 className="font-medium text-3xl w-[32rem] pb-3 md:w-[25rem] sm:w-[20rem]">
            Simplify your life with <span className="font-bold">MonoNote</span>;
            The ultimate digital notepad
          </h1>
          <p className="lg:w-[28rem] md:w-[23rem] sm:w-[18rem]">
            Stay organized, on-task and on-the-go with our sleek, easy to use
            notepad
          </p>
          <div className="flex items-center justify-start gap-3 mt-3 sm:mt-7 sm:w-full">
            <a
              href=""
              className="bg-black rounded-xl px-2 w-32 text-center inline-block py-3 text-white hover:bg-white hover:text-black sm:w-full"
            >
              Get Started
            </a>
            <a
              href=""
              className="border border-black border-2 rounded-xl inline-block px-2 w-32 text-center py-3 hover:bg-black hover:text-white sm:w-full"
            >
              Login
            </a>
          </div>
        </div>
        <div className=" sm:flex sm:items-center sm:justify-center sm:py-8">
          <img src={heroImg} className="lg:width-unset md:w-[80%] sm:w-[70%]" alt="MonoNote" />
        </div>
      </div>
    </section>
  );
}

export default Hero
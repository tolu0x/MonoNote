import React from 'react';
import todo from '../assets/todo-icon.png';
import scribble from '../assets/scribble.png';
import devices from '../assets/devices.png';

const benefitsData = [
  {
    id: 1,
    title: "Stay productive no matter where you are",
    body: "MonoNote is designed to help you stay productive no matter where you are. Whether you're commuting to work, sitting in a meeting, or waiting in line at the grocery store, you can quickly and easily capture your thoughts and ideas without missing a beat. And with our sync feature, your notes will be instantly available on all your devices, so you can stay on task and on schedule no matter where you are.",
    icon: new URL(`../assets/todo-icon.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Stay productive no matter where you are",
    body: "MonoNote is designed to help you stay productive no matter where you are. Whether you're commuting to work, sitting in a meeting, or waiting in line at the grocery store, you can quickly and easily capture your thoughts and ideas without missing a beat. And with our sync feature, your notes will be instantly available on all your devices, so you can stay on task and on schedule no matter where you are.",
    icon: new URL(`../assets/scribble.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Stay productive no matter where you are",
    body: "MonoNote is designed to help you stay productive no matter where you are. Whether you're commuting to work, sitting in a meeting, or waiting in line at the grocery store, you can quickly and easily capture your thoughts and ideas without missing a beat. And with our sync feature, your notes will be instantly available on all your devices, so you can stay on task and on schedule no matter where you are.",
    icon: new URL(`../assets/devices.png`, import.meta.url).href,
  }
];

const Benefits = () => {
  return (
    <section className="py-4 border-b-2 border-black">
      <div className="flex justify-center items-center">
        <h1 className="text-center font-medium text-3xl pt-2 pb-7 w-[30rem]">
          Simplify your life with an intuitive streamlined design
        </h1>
      </div>

      <div>
        {
          benefitsData.map((benefit) =>{
            return (
              <div
                key={benefit.id}
                className="flex items-center justify-center pb-3 row-r sm:flex-col sm:px-5"
              >
                <img src={benefit.icon} />
                <div className="flex flex-col items-start justify-center">
                  <h3 className="font-semibold text-xl w-[24rem] pb-2 sm:w-[19rem]">
                    {benefit.title}
                  </h3>
                  <p className="lg:w-[29rem] md:w-[24rem] sm:w-[21rem]">
                    {benefit.body}
                  </p>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Benefits
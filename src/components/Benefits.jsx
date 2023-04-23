import React from 'react';
import todo from '../assets/todo-icon.png';
import scribble from '../assets/scribble.png';
import devices from '../assets/devices.png';

const Benefits = () => {
  return (
    <section className="py-4 border-b-2 border-black">
      <div className="flex justify-center items-center">
        <h1 className="text-center font-medium text-3xl pt-2 pb-7 w-[30rem]">
          Simplify your life with an intuitive streamlined design
        </h1>
      </div>

      <div>
        <div className="flex items-center justify-center pb-3">
          <img src={todo} />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-semibold text-xl w-[24rem] pb-2">
              Stay productive no matter where you are
            </h3>
            <p className="w-[29rem]">
              MonoNote is designed to help you stay productive no matter where
              you are. Whether you're commuting to work, sitting in a meeting,
              or waiting in line at the grocery store, you can quickly and
              easily capture your thoughts and ideas without missing a beat. And
              with our sync feature, your notes will be instantly available on
              all your devices, so you can stay on task and on schedule no
              matter where you are.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-center pb-3">
          <img src={scribble} />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-semibold text-xl w-[24rem] pb-2">
              Keep your notes and ideas in one central location
            </h3>
            <p className="w-[29rem]">
              With MonoNote, you can keep all your notes and ideas in one
              central location. Our advanced tagging and categorization features
              make it easy to organize your notes by project, task, or idea, so
              you'll always be able to find what you need when you need it. And
              with our advanced search feature, you can quickly and easily find
              the notes you need, even if you have hundreds or thousands of
              them.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-3">
          <img src={devices} />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-semibold text-xl w-[24rem] pb-2">
              Never forget important tasks or ideas again
            </h3>
            <p className="w-[29rem]">
              With MonoNote, you'll never forget an important task or idea
              again. Our advanced note-taking capabilities and easy-to-use
              design make it simple to jot down thoughts, to-dos, and reminders
              quickly and easily. Whether you're on the go or at your desk,
              you'll have all your notes and ideas in one central location, so
              you'll never forget a thing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits
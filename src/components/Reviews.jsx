import React from 'react';
import stars from "../assets/stars-icon.png";
import quoteIcon from "../assets/quote-icon.png";
import twtIcon from "../assets/twitter-icon.png";
import tobi from "../assets/tobi.png";
import tomiwa from "../assets/tomiwa.png";
import timi from "../assets/timi.png";
import ayomide from "../assets/ayomide.png";
import playStore from "../assets/play-store.svg"
import appStore from "../assets/app-store.svg"
import leftDoodle from "../assets/left-doodle.png";
import rightDoodle from "../assets/right-doodle.png";


const Reviews = () => {
  return (
    <section className="py-6 border-b-2 border-black relative h-[50rem]">
      <div className="flex flex-col mb-5 gap-3 items-center justify-center">
        <img src={stars} />
        <h2 className="text-3xl">Discover why our users love MonoNote</h2>
      </div>

      <div className="flex items-center justify-center gap-3 px-3 pt-5 pb-20">
        <div className="border border-black p-4 w-1/4 h-60 rounded-md gap-4 flex flex-col justify-center items-start">
          <img src={quoteIcon} />

          <p className="w-full">
            This app has changed the way I organize my life. I don’t know how I
            lived without it. I love MonoNote.
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={ayomide} />

              <div className="flex flex-col items-start justify-center">
                <p className="font-medium">Ayomide J.</p>
                <p>@ayodesigns</p>
              </div>
            </div>

            <img src={twtIcon} />
          </div>
        </div>

        <div className="border border-black p-4 w-1/4 h-60 rounded-md gap-4 flex flex-col justify-center items-start">
          <img src={quoteIcon} />

          <p className="w-full">
            As a busy professional, I depend on MonoNote to keep me organized
            and productive. Highly recommend!
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={timi} />

              <div className="flex flex-col items-start justify-center">
                <p className="font-medium">Timilehin A.</p>
                <p>@inqtimi</p>
              </div>
            </div>

            <img src={twtIcon} />
          </div>
        </div>

        <div className="border border-black p-4 w-1/4 h-60 rounded-md gap-4 flex flex-col justify-center items-start">
          <img src={quoteIcon} />

          <p className="w-full">
            With MonoNote, I can capture all my ideas in one place and stay
            organized with tags and categories.
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={tobi} />

              <div className="flex flex-col items-start justify-center">
                <p className="font-medium">Tobi Williams</p>
                <p>@techbroke</p>
              </div>
            </div>

            <img src={twtIcon} />
          </div>
        </div>

        <div className="border border-black p-4 w-1/4 h-60 rounded-md gap-4 flex flex-col justify-center items-start">
          <img src={quoteIcon} />

          <p className="w-full">
            The user interface is simple and easy to navigate, and the automatic
            syncing across all my devices is a lifesaver.
          </p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={tomiwa} />

              <div className="flex flex-col items-start justify-center">
                <p className="font-medium">Tomiwa P.</p>
                <p>@figbaba</p>
              </div>
            </div>

            <img src={twtIcon} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 items-center justify-center border-t-2 border-black pt-20">
        <h2 className="text-center text-3xl w-[28rem]">
          Get Started today and download{" "}
          <span className="font-bold">MonoNote</span> for free.
        </h2>

        <div className="flex items-center justify-between gap-7">
          <img src={playStore} />
          <img src={appStore} />
        </div>
      </div>

      <img src={leftDoodle} className="absolute bottom-0 left-0" />
      <img src={rightDoodle} className="absolute bottom-0 right-0" />
    </section>
  );
}

export default Reviews
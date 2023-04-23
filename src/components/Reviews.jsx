import React from 'react';
import stars from "../assets/stars-icon.png";
import quoteIcon from "../assets/quote-icon.png";
import twtIcon from "../assets/twitter-icon.png";
import tobi from "../assets/tobi.png";
import tomiwa from "../assets/tomiwa.png";
import timi from "../assets/timi.png";
import ayomide from "../assets/ayomide.png";


const Reviews = () => {
  return (
    <section className="py-6 border-b-2 border-black">
      <div className="flex flex-col mb-5 gap-3 items-center justify-center">
        <img src={stars} />
        <h2 className="text-3xl">Discover why our users love MonoNote</h2>
      </div>

      <div className="flex items-center justify-center gap-3 px-3 py-5">
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
    </section>
  );
}

export default Reviews
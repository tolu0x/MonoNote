import React from 'react';
import stars from "../assets/stars-icon.png";
import playStore from "../assets/play-store.svg"
import appStore from "../assets/app-store.svg"
import leftDoodle from "../assets/left-doodle.png";
import rightDoodle from "../assets/right-doodle.png";

const reviewsData = [
  {
    id: 1,
    name: "Ayomide J.",
    username: "@ayodesigns",
    body: "This app has changed the way I organize my life. I don’t know how I lived without it. I love MonoNote.",
    clientImg: new URL(`../assets/ayomide.png`, import.meta.url).href,
    quoteIcon: new URL(`../assets/quote-icon.png`, import.meta.url).href,
    twtIcon: new URL(`../assets/twitter-icon.png`, import.meta.url).href,
  },
  {
    id: 2,
    name: "Timilehin A.",
    username: "@inqtimi",
    body: "As a busy professional, I depend on MonoNote to keep me organized and productive. Highly recommend!",
    clientImg: new URL(`../assets/timi.png`, import.meta.url).href,
    quoteIcon: new URL(`../assets/quote-icon.png`, import.meta.url).href,
    twtIcon: new URL(`../assets/twitter-icon.png`, import.meta.url).href,
  },
  {
    id: 3,
    name: "Tobi Williams",
    username: "@techbroke",
    body: "With MonoNote, I can capture all my ideas in one place and stay organized with tags and categories.",
    clientImg: new URL(`../assets/tobi.png`, import.meta.url).href,
    quoteIcon: new URL(`../assets/quote-icon.png`, import.meta.url).href,
    twtIcon: new URL(`../assets/twitter-icon.png`, import.meta.url).href,
  },
  {
    id: 4,
    name: "Tomiwa P.",
    username: "@figbaba",
    body: "The user interface is simple and easy to navigate, and the automatic syncing across all my devices is a lifesaver.",
    clientImg: new URL(`../assets/tomiwa.png`, import.meta.url).href,
    quoteIcon: new URL(`../assets/quote-icon.png`, import.meta.url).href,
    twtIcon: new URL(`../assets/twitter-icon.png`, import.meta.url).href,
  }
];
const Reviews = () => {
  return (
    <section className="py-6 border-b-2 border-black relative lg:h-[60rem] md:h-[75rem] sm:h-[113rem]">
      <div className="flex flex-col mb-5 gap-3 items-center justify-center">
        <img src={stars} />
        <h2 className="text-3xl text-center sm:w-80 ">
          Discover why our users love MonoNote
        </h2>
      </div>

      <div className="flex items-center justify-center gap-3 px-3 pt-5 pb-20 lg:flex-nowrap md:flex-wrap sm:flex-col">
        {
          reviewsData.map((review) => {
            return (
              <div key={review.id} className="border border-black p-4 w-1/4 h-60 rounded-md gap-4 flex flex-col justify-center items-start md:w-2/5 sm:w-full">
                <img src={review.quoteIcon} />

                <p className="w-full">{review.body}</p>

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-center gap-2">
                    <img src={review.clientImg} />

                    <div className="flex flex-col items-start justify-center">
                      <p className="font-medium">{review.name}</p>
                      <p>{review.username}</p>
                    </div>
                  </div>

                  <img src={review.twtIcon} />
                </div>
              </div>
            );
          })
        }
      </div>

      <div className="flex flex-col gap-7 items-center justify-center border-t-2 border-black py-44">
        <h2 className="text-center text-3xl w-[28rem] sm:w-[21rem]">
          Get Started today and download{" "}
          <span className="font-bold">MonoNote</span> for free.
        </h2>

        <div className="flex items-center justify-between gap-7">
          <img src={playStore} />
          <img src={appStore} />
        </div>
      </div>

      <img src={leftDoodle} className="absolute bottom-0 left-0 sm:w-[50%] z-20" />
      <img src={rightDoodle} className="absolute bottom-0 right-0 sm:w-[50%] z-20" />
    </section>
  );
}

export default Reviews
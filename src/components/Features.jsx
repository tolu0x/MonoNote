import React from 'react';
import chartIcon from '../assets/chart-icon.png';
import tagIcon from '../assets/tag-icon.png';
import syncIcon from '../assets/cycle-icon.png';
import clockIcon from '../assets/clock-icon.png';
import moonIcon from '../assets/moon-icon.png';

const Features = () => {
  return (
    <section className="py-4 border-b-2 border-black">
      <div className="flex justify-center items-center">
        <h1 className="text-center font-medium text-3xl pt-2 pb-7 w-96">
        Features that allows you to reach your needs faster
        </h1>
      </div>
      
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <div className="flex items-start justify-center gap-4">
          <img src={chartIcon} />
          <div className="flex flex-col items-start justify-between">
            <h3 className="w-44 font-semibold pb-2">
              Advanced note-taking capabilities
            </h3>
            <p className="w-60">
              You'll have advanced note-taking capabilities at your fingertips.
              Our app makes it easy to create, edit, and delete notes with just
              a few taps. You can also add photos, voice memos, and videos to
              your notes, in one place.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-4">
          <img src={tagIcon} />
          <div className="flex flex-col items-start justify-between">
            <h3 className="w-44 font-semibold pb-2">
              Organize notes by tags and categories
            </h3>
            <p className="w-60">
              You can create tags and categories based on projects, tasks, or
              ideas, so you'll always be able to find the notes you need. You
              can also search for notes by keyword or tag, so you can quickly
              find information.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-4">
          <img src={syncIcon} />
          <div className="flex flex-col items-start justify-between">
            <h3 className="w-44 font-semibold pb-2">
              Sync across all your devices
            </h3>
            <p className="w-60">
              You can access your notes on your phone, tablet, or computer, so
              you can stay productive no matter where you are. Plus, with our
              cloud storage feature, your notes will be securely backed up.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-4">
          <img src={clockIcon} />
          <div className="flex flex-col items-start justify-between">
            <h3 className="w-44 font-semibold pb-2">
              Set reminders and notifications
            </h3>
            <p className="w-60">
              You can set reminders based on time or location, so you'll always
              be on top of your to-do list. You can also receive notifications
              for upcoming events, so you'll never miss an important meeting or
              deadline.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center gap-4">
          <img src={moonIcon} />
          <div className="flex flex-col items-start justify-between">
            <h3 className="w-44 font-semibold pb-2">
              Dark Mode for comfortable night use
            </h3>
            <p className="w-60">
              You can use the app comfortably at night without straining your
              eyes. The dark mode setting reduces the amount of blue light
              emitted by your phone, which can help reduce eye strain and
              promote better sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features
import React from 'react'


const featuresData = [
  {
    id: 1,
    title: "Advanced note-taking capabilities",
    body: "You'll have advanced note-taking capabilities at your fingertips. Our app makes it easy to create, edit, and delete notes with just a few taps. You can also add photos, voice memos, and videos to your notes, in one place.",
    icon: new URL(`../assets/chart-icon.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Organize notes by tags and categories",
    body: "You can create tags and categories based on projects, tasks, or ideas, so you'll always be able to find the notes you need. You can also search for notes by keyword or tag, so you can quickly find information.",
    icon: new URL(`../assets/tag-icon.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Sync across all your devices",
    body: "You can access your notes on your phone, tablet, or computer, so you can stay productive no matter where you are. Plus, with our cloud storage feature, your notes will be securely backed up.",
    icon: new URL(`../assets/cycle-icon.png`, import.meta.url).href,
  },
  {
    id: 4,
    title: "Set reminders and notifications",
    body: "You can set reminders based on time or location, so you'll always be on top of your to-do list. You can also receive notifications for upcoming events, so you'll never miss an important meeting or deadline.",
    icon: new URL(`../assets/clock-icon.png`, import.meta.url).href,
  },
  {
    id: 5,
    title: "Dark Mode for comfortable night use",
    body: "You can use the app comfortably at night without straining your eyes. The dark mode setting reduces the amount of blue light emitted by your phone, which can help reduce eye strain and promote better sleep.",
    icon: new URL(`../assets/moon-icon.png`, import.meta.url).href,
  },
];
const Features = () => {
  return (
    <section className="py-4 border-b-2 border-black">
      <div className="flex justify-center items-center">
        <h1 className="text-center font-medium text-3xl pt-2 pb-7 w-[24rem] sm:w-[19rem]">
          Features that allows you to reach your needs faster
        </h1>
      </div>

      <div className="flex items-center justify-center gap-5 flex-wrap md:gap-9">
        {featuresData.map((feature) => {
          return (
            <div
              className="flex items-start justify-center gap-4"
              key={feature.id}
            >
              <img src={feature.icon} />
              <div className="flex flex-col items-start justify-between">
                <h3 className="w-44 font-semibold pb-2">{feature.title}</h3>
                <p className="w-60">{feature.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features
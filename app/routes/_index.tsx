import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen flex flex-col ">
      <div className="w-full flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-1/4 flex justify-center items-center">
          <img
            className="rounded-full w-46 h-56"
            alt="headshot of shane walker"
            src="/images/headshot.webp"
          />
        </div>
        <div className="w-full lg:w-3/4">
          <h1 className="text-4xl font-bold py-4">Behind the Headshot 👋</h1>
          <p className="py-4">
            Hello, I'm Shane Walker, a passionate software engineer based in the
            United States. I specialize in TypeScript and am currently thriving
            as a Senior Frontend Engineer at Lemongrass Cloud, where I
            contribute to innovative web solutions.
          </p>
          <p className="py-4 hidden sm:block">
            I started my tech journey in a text-based MUD as a teen. Hours flew
            by as I played, but soon, tinkering with tintin aliases to automate
            monster fights caught my interest more than the game itself. That
            was my lightbulb moment: I was really into scripting. So, I dived
            into the world of software development, playing around with making
            cool web apps using React, then getting my hands dirty with desktop
            app development using Electron.js. I even got to play around with
            Google Glass apps using Kotlin and whipped up some Amazon Alexa
            Skills using node.js. It's been quite a ride exploring all these
            different tech avenues!
          </p>
          <p className="py-4 hidden sm:block">
            At Lemongrass Cloud, I'm on a dynamic team with two key objectives:
            transitioning our module federation tech stack to TypeScript and
            creating an elegant, accessible component library for developers to
            build user interfaces. We achieved both goals, not only teaching
            several team members TypeScript best practices but also designing a
            fully accessible UI based on Material UI. These achievements have
            deepened my passion for coding. They resonate with my natural
            inclination to tackle complex problems and my eagerness to keep
            growing in the fast-paced world of technology.
          </p>
          <p className="py-4 hidden sm:block">
            Moving forward, my goal is to redefine the resources available for
            children with special needs. Being a father to a deaf daughter, the
            issue of accessibility to information holds a special place in my
            heart, and I'm driven to make a meaningful impact in this area.
            Through this blog, I look forward to sharing insights, personal
            experiences, and stories, hoping to connect with other tech
            enthusiasts and those who are passionate about lifelong learning.
          </p>
        </div>
      </div>
    </main>
  );
}

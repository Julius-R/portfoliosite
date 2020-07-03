import React from "react"

export default function Portfolio() {
  const projects = [
    {
      imgSrc:
        "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5ef682b4eadf82000721061e/screenshot.png",
      url: "https://kevinsklosetllc.com/",
      title: `Kevin's Kloset LLC`,
      tech: "Gatsby / TailwindCSS / Shopify",
    },
    {
      imgSrc: "https://imgflip.com/s/meme/Mocking-Spongebob.jpg",
      url: "https://spongememe.com/",
      alt: "Image from https://imgflip.com/s/meme/Mocking-Spongebob.jpg",
      title: "Sponge Meme",
      tech: "Pug / Sass / Vanilla JS",
    },
    {
      imgSrc:
        "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e0cf6ed89271315a4731862/screenshot.png",
      url: "https://lepigame.netlify.app/",
      title: "Pig Game",
      tech: "Vanilla JS / ES6",
    },
  ]
  return (
    <section id="portfolio" class="w-full">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
              My Recent Work
            </h1>
            <div id="bluebrd" class="h-1 w-20 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            Alright, I've told you about me, gave you a list of a few skills,
            and sold you (hopefully!) on me. Now, is the time to show you what I
            can actually do! Here are a few of my most recent projects to show
            you!
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {projects.map(project => {
            return (
              <div
                class={`sm:w-full ${
                  projects.length < 4 ? "md:w-1/3" : "xl:w-1/4 md:w-1/2"
                } p-4`}
              >
                <div class="p-6 rounded-lg w-full">
                  <a href={project.url} target="_blank">
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={project.imgSrc}
                      alt={project.alt ? project.alt : "content"}
                    />
                  </a>
                  <h3 class="tracking-widest text-xs font-medium title-font">
                    <a id="blue" href={project.url} target="_blank">
                      VIEW SITE
                    </a>
                  </h3>
                  <h2 class="text-lg font-medium title-font">
                    {project.title}
                  </h2>
                  <p class="leading-relaxed text-base">{project.tech}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

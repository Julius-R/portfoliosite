import React from "react"

export default function Skills() {
  const skills = [
    "HTML5",
    "PUG/Jade",
    "CSS3",
    "SASS",
    "TailwindCss",
    "Vanilla JS",
    "ES6",
    "React",
    "Redux",
    "Gatsby",
    "Adobe XD",
  ]
  return (
    <section id="skills" class="w-full">
      <div class="container flex flex-wrap px-5 py-16 mx-auto items-center">
        <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2">
            Do you even code, bro?
          </h1>
          <p class="leading-relaxed sm:text-base text-xl">
            I get it. You want a website, and you expect the best. Or, you're an
            employer who doesn't just want to hire someone who's only skill set
            is ctrl + c & ctrl + v. Have no worries, I make it my mission to
            keep up with all the latest, tested, and proven technologies! That
            way, you get the best!
          </p>
        </div>
        <div class="flex flex-col md:w-1/2 md:pl-12">
          <h2 class="title-font font-medium tracking-widest text-2xl mb-3">
            Skill Set
          </h2>
          <nav class="flex flex-wrap list-none -mb-1 text-lg">
            {skills.map(skill => (
              <li key={skill} class="lg:w-1/3 mb-1 w-1/2">
                {skill}
              </li>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

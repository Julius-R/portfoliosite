import React from "react"
import img from "../images/undraw_web_developer_p3e5.svg"

export default function About() {
  return (
    <section id="about" class="flex items-center">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hello there,
            <br class="hidden lg:inline-block" />
            My name is Julius
          </h1>
          <p class="mb-8 leading-relaxed">
            I am a web developer based in Dallas, Texas. I am currently an
            undergraduate with a Bachelors in Information Technology. During my
            studies, I discovered my love of coding and the sheer joy of seeing
            my ideas come to life! If you need a web development job done, or a
            new team member, let's get in touch!
          </p>
        </div>
      </div>
    </section>
  )
}

import React from "react"

export default function Contact() {
  return (
    <section id="cta" class="w-full">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font">
            I commend you on making it this far! If you want to get in touch,
            email using the button below!
          </h1>
          <a
            href="mailto:julius.robinson95@yahoo.com"
            class="flex-shrink-0 border-0 py-2 px-8 rounded text-lg mt-10 sm:mt-0"
          >
            Email Me!
          </a>
        </div>
      </div>
    </section>
  )
}

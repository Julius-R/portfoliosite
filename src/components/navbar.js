import { Link } from "gatsby"

import React from "react"

const Navbar = () => (
  <header class="w-full fixed top-0 z-10">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex title-font font-medium items-center mb-4 md:mb-0 text-xl">
        Julius Robinson
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href="#about" class="mr-5">About</a>
        <a href="#skills" class="mr-5">Skills</a>
        <a href="#portfolio" class="mr-5">Portfolio</a>
      </nav>
      <a class="hidden md:inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
        Contact Me!
        
      </a>
    </div>
  </header>
)

export default Navbar

import React from "react"

export default function jumbotron() {
  return (
    <header id="jumbotron" className="h-screen w-full flex align-center">
      <div className="m-auto text-center">
        <h2 className="title text-xl md:text-4xl mb-2">Julius Robinson</h2>
        <p id="subtitle" className="text-2xl md:text-5xl mb-2">
          Frontend Developer
        </p>
        <p className="text-lg md:text-2xl">
          React / Gatsby / Sass / Pug / Javascript
        </p>
      </div>
    </header>
  )
}

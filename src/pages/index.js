import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import About from "../components/about"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/card"
import Cell from "../components/cell"
import Wave from "../components/wave"
import Section from "../components/section"
import staticdata from "../../staticdata.json"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Logo = styled.img`
  width: 50px;
  cursor: pointer;
  transform: scale(1);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.5);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="heroGroup">
        <h1>
          Learn to <br />
          design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="logos">
          <Logo src={require("../images/logo-sketch.png")} alt="" />
          <Logo src={require("../images/logo-figma.png")} alt="" />
          <Logo src={require("../images/logo-studio.png")} alt="" />
          <Logo src={require("../images/logo-framer.png")} alt="" />
          <Logo src={require("../images/logo-react.png")} alt="" />
          <Logo src={require("../images/logo-swift.png")} alt="" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="Design system with Figma"
          text="10 sections"
          image={require("../images/card-01.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/card-02.jpg")}
        />
        <Card
          title="Sound Design with Cubase"
          text="6 sections"
          image={require("../images/card-03.jpg")}
        />
        <Card
          title="Build an ARKit 2 app"
          text="10 sections"
          image={require("../images/card-04.jpg")}
        />
        <Card
          title="Learn iOS Design"
          text="6 sections"
          image={require("../images/card-05.jpg")}
        />
        <Card
          title="Create a Spritekit game"
          text="9 sections"
          image={require("../images/card-06.jpg")}
        />
      </div>
    </div>
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 sections — 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell key={cell.title} title={cell.title} image={cell.image}></Cell>
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage

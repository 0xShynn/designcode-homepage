import React from "react"
import styled from "styled-components"
import Wave from "./wave"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 700px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
`
const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`
const SectionTitleGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 auto;
  padding: 20px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`
const SectionTitle = styled.h3`
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  color: white;
  @media (max-width: 720px) {
    font-size: 40px;
  }
`
const SectionText = styled.p`
  color: white;
  margin: 0;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = props => {
  return (
    <SectionGroup image={props.image}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src={props.logo}></SectionLogo>
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default Section

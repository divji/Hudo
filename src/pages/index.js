import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub, faTwitter, faMedium, faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { externalLink } from "../components/Path";
import Layout from "../components/Layout";
import { Container } from "../components/Header";
import iam from "../assets/images/iam.jpg"
import NavLink from "../components/NavLink";


library.add(faGithub, faTwitter, faMedium, faLinkedin);

export const SectionHeader = styled.section`
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 40px;
`
export const Heading = styled.h1`
  color: snow;
  font-size: 35px;
  padding: 20px 0 10px 0;
`
export const Profession = styled.p`
  font-size: 25px;
  color: coral;
`
export const IconContainer = styled.div`
  padding-left: 25px;
`
export const HeaderDescription = styled.div`
  display: flex;
  width; 100%;
  margin-top: 65px;
  justify-content: center;
`
export const ParagraphDescription = styled.p`
  text-align: left;
  font-size: 30px;
  color: snow;
  line-height: 50px;
  width: 80%;
  margin-bottom: 40px;

  @media(max-width: 768px) {
    margin: 20px 0 20px 0;
    font-size:35px;
    
    .heading_span {
      font-size: 30px;
    }
    .personal {
      font-size: 25px;
      display: inline;
    }

    .current{
      font-size: 25px;
    }
    span {
      font-size: 20px;
    }

    @media(max-width: 630px) {
      font-size: 20px;
      
      .heading_span {
        font-size: 30px;
      }
      .personal {
        font-size: 25px;
        display: inline;
      }
  
      .current{
        font-size: 25px;
      }
      span {
        font-size: 20px;
      }
`

export default function Home() {
  return (
      <Layout>
          <SectionHeader>
            <Container>
              <SectionHeader className="main__content">
                <img src={iam} className="main-image" alt="Profile"></img>
                <StaticQuery
                  query={graphql`
                    query SiteTitleQuery {
                      site {
                        siteMetadata {
                          title
                        }
                      }
                    }
                  `}
                    render={data => (
                      <Heading>{data.site.siteMetadata.title}</Heading>
                    )}
                  />
               <Profession>React Developer</Profession>
                <IconContainer>
                      <a href={externalLink.github}   target="_blank" rel="noreferrer" aria-label="github"><FontAwesomeIcon className="fab fa-2x" icon={['fab','github']}/></a>
                      <a href={externalLink.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin"><FontAwesomeIcon className="fab fa-2x" icon={['fab','linkedin']}/></a>
                      <a href={externalLink.medium}   target="_blank" rel="noreferrer" aria-label="medium"><FontAwesomeIcon className="fab fa-2x" icon={['fab','medium']}/></a>
                      <a href={externalLink.twitter}  target="_blank" rel="noreferrer" aria-label="twitter"><FontAwesomeIcon className="fab fa-2x" icon={['fab','twitter']}/></a>
                </IconContainer>
                <HeaderDescription>
                      <ParagraphDescription>
                        <span className="heading_span">Hello, I am Vlad Koliesnik! <span aria-label="emoji" role="img">👋</span></span>
                        Front-End Developer, who work with <a className="personal" target="_blank" rel="noreferrer" href="https://medium.com/@blockchain_simplified/what-is-mern-stack-9c867dbad302">MERN stack</a> to create apps and web pages. 
                        In this web-site you can find information <a href="https://github.com/divji" target="_blank" rel="noreferrer" className="personal">about me</a>, my learning curve and experience.
                        I develop projects mostly with JavaScript using React and Node.
                        Check out my <NavLink to="/projects/" className="personal current">personal projects</NavLink>.
                      </ParagraphDescription>
                </HeaderDescription>           
              </SectionHeader> 
            </Container>
          </SectionHeader>
      </Layout>
  )
}


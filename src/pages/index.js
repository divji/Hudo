import React from "react";
import { Link, StaticQuery,qraphql } from "gatsby";
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


library.add(faGithub, faTwitter, faMedium, faLinkedin);

export const Section = styled.section`
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

export default function Home() {
  return (
      <Layout>
          <Section>
            <Container>
              <Section className="main__content">
                <img src={iam} className="main-image"></img>
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
                      <a href={externalLink.github}   aria-label="github"><FontAwesomeIcon className="fab fa-2x" icon={['fab','github']}/></a>
                      <a href={externalLink.linkedin} aria-label="linkedin"><FontAwesomeIcon className="fab fa-2x" icon={['fab','linkedin']}/></a>
                      <a href={externalLink.medium}   aria-label="medium"><FontAwesomeIcon className="fab fa-2x" icon={['fab','medium']}/></a>
                      <a href={externalLink.twitter}  aria-label="twitter"><FontAwesomeIcon className="fab fa-2x" icon={['fab','twitter']}/></a>
                </IconContainer>        
              </Section>    
            </Container>
          </Section>
      </Layout>
  )
}


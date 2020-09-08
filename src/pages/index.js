import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';
import { Container } from "../components/Header";


export const Section = styled.section`
  // background-color: red;
  display: block;
  width: 100%;
  text-align: center;
`

export default function Home() {
  return (
      <Layout>
          <Section>
            <Container>
              <Section>
                <h1>Bykanuvk</h1>
              </Section>    
            </Container>
          </Section>
      </Layout>
  )
}

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Layout from "../components/Layout";

export const Container = styled.div`
    margin: auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    text-align: left;
    color: snow;
    width: 70%;
    font-size: 25px;

    h1, h2 {
      padding: 20px;
      text-align: center;
    }

    ul {
      margin: 0 0 0 30px;
    }

    li {
      list-style-type: none;
      padding: 10px;
      list-style-type: disc;
    }

    p {
      padding: 20px;
    }

    pre {
      background-color: snow;
      padding: 20px;
    }

    code {
      color: coral;
      font-weight: bold;
      font-size: 20px;
    }

    img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
`
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <Content dangerouslySetInnerHTML={{ __html: post.html }}/>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

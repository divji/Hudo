import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout";

export const Container = styled.div`
    margin: auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: snow;
      margin: 40px 0 20px 0;
    }

    @media(max-width: 600px) {
      h1 {
        font-size: 25px;
      }
    }
`;

export const Content = styled.div`
    text-align: left;
    color: snow;
    width: 80%;
    font-size: 25px;

    h2 {
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

    a {
      color: #5C7AFF
    }

    p {
      padding: 20px;
    }

    .code {
      color: coral;
      font-weight: bold;
      font-size: 20px;
      display: block;
      background-color: snow;
      padding: 20px;
      line-height: 30px; 
    }

    img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }

    @media(max-width: 968px) {
      width: 80%;
      
    .code {
        font-size: 16px;
        font-style: italic;
        text-align: left;
      }
    }

    @media(max-width: 600px) {
      font-size: 20px;
    }

    @media(max-width: 471px) {
      width: 100%;

      .code {
        font-size: 15px;
      }
    }
    
    @media(max-width: 360px) {
      .code {
        font-size: 13px;
      }
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
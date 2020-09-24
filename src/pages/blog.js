import React from "react";
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from "../components/Layout";

export const Container = styled.div`
    margin: auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: 35px;
  color: coral;
  text-align: center;
  margin: 30px 0 30px 0;
`

export const BlogPostContainer = styled.div`
  width: 50%;
  background-color: #3B362F;
  display: flex;
  padding: 30px;
  margin: 0 0 25px 0;
  
  @media(max-width: 968px) {
    width: 100%;
}

&:hover {
    transition: 1s ease-out all;
    background-color: snow;
}

&:last-child {
    margin: 0;
}

@media(max-width: 768px) {
    width: 100%;
}
`

export const BlogPostImage = styled.img`
    width: 90px;
    height: 90px;

    img {
        width: 100%;
    }
`;

export const BlogPostContent = styled.div`
    flex-direction: row;
    justify-content: start;
    margin: 0 0 0 20px; 
`;

export const BlogPostTitle = styled.div`
    color: red;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-size: 25px;
`;

export const BlogPostSubtitle = styled.div`
    color: red;
    text-align: left;
    padding: 10px 0 10px 0;
`;

export const BlogPostTag = styled.span`
    height: 20px;
    width: 20px;
    background-color: green;
    color: snow;
    border: 1px solid red;
    margin: 0 0 0 10px;
    padding: 5px;
    &:first-child {
        margin: 0;
    }
`

export const BlogPostTagContainer = styled.div`
    width: 50%:
    display: flex;
    flex-direction: row;
    margin: 10px 0 20px 0;
`

export default function Blog ({data}) {
    return (
        <Layout>
          <MainTitle>There are my blog posts</MainTitle>
            <Container>{data.allMarkdownRemark.edges.map(({node}) => {
                return <BlogPostContainer key={node.id}> 
                    <BlogPostImage src={node.frontmatter.preview}></BlogPostImage>
                    <BlogPostContent>
                      <BlogPostTitle>{node.frontmatter.title}</BlogPostTitle>
                      <BlogPostTagContainer>
                        {node.frontmatter.tags.map(tag => {
                          return <BlogPostTag>{tag}</BlogPostTag>
                        })}
                      </BlogPostTagContainer>
                      <Link to={node.fields.slug}>Read More</Link>
                    </BlogPostContent>
                </BlogPostContainer>
            })}
            </Container>
        </Layout>
    )
}

export const query = graphql`
{
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
              slug
          }
          frontmatter {
            title
            date
            preview
            tags
          }
        }
      }
    }
}  
`
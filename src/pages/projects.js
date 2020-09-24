import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Card from "../components/ProjectCard";
import thunder from "../assets/images/thunder.png";

export const ColumnContainer = styled.div`
    margin: auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeadingProjects = styled.h1`
    font-size: 35px;
    color: snow;
    margin: 50px 0 40px 0;
    display: block;

    &::after {
        content: "";
        border-bottom: 2px coral solid;
        display: block;
        margin-top: 8px;
    }
`;


export default function Projects() {
    return(
        <Layout>
            <ColumnContainer>
                <HeadingProjects>Projects</HeadingProjects>
                <Card link="https://chelsea.com" image={<img src={thunder}></img>} title="Blog" subtitle="Blog using Gatsby" tags={["Gatsby", "PWA"]}></Card>
                <Card link="https://google.com" image={<img src={thunder}></img>} title="Blog" subtitle="Blog using Gatsby" tags={["Gatsby", "PWA"]}></Card>
                <Card link="https://google.com" image={<img src={thunder}></img>} title="Blog" subtitle="Blog using Gatsby" tags={["Gatsby", "PWA"]}></Card>
                <Card link="https://google.com" image={<img src={thunder}></img>} title="Blog" subtitle="Blog using Gatsby" tags={["Gatsby", "PWA"]}></Card>
            </ColumnContainer>     
        </Layout>
    )
}
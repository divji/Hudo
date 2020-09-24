import React from "react";
import styled from "styled-components";

export const ProjectLink = styled.a`
    width: 50%;
    background-color: #3B362F;
    display: flex;
    padding: 30px;
    margin: 0 0 25px 0;
    cursor: pointer;

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
`;

export const ProjectImage = styled.div`
    width: 50px;
    height: 50px;

    img {
        width: 100%;
    }
`;

export const CardContent = styled.div`
    flex-direction: row;
    justify-content: start;
    margin: 0 0 0 20px; 
`;

export const ProjectTitle = styled.div`
    color: red;
    text-align: left;
    display: flex;
    flex-direction: column;
`;

export const ProjectSubtitle = styled.div`
    color: red;
    text-align: left;
    padding: 10px 0 10px 0;
`;

export const ProjectTagContainer = styled.div`
    width: 100px;
`

export const ProjectTag = styled.span`
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

const Card = ({link, image, title, subtitle, tags}) => {
    return (
        <ProjectLink href={link}>
            <ProjectImage>{image}</ProjectImage>
            <CardContent>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubtitle>{subtitle}</ProjectSubtitle>
                <ProjectTagContainer>
                    {tags.map(tag => {
                        return <ProjectTag key={tag}>{tag}</ProjectTag>
                    })}
                </ProjectTagContainer>
            </CardContent>
        </ProjectLink>

    )
}

export default Card;
import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
    width:100%;
    height:100%;
    margin-top:7px;
    margin-bottom:7px;
`

export const ProjectImage = styled.img`
    width:100%;
    height:100%;
`

export const ProjectTitleAndDurationConatainer = styled.div`
    display: flex;
    justify-conent: space-between;
    flex-direction:column;
    align-items: flex-start;
    
    `

export const ProjectTitle = styled.h1`
    color:#171f46;
    font-family:"Roboto";
    font-size:20px;
    font-weight:700;
    margin:0px;
   `

export const DurationContainer = styled.div`
    display: flex;
    justify-conent: center;
    align-items: center;
    
    `

export const Duration = styled.p`
    color:#171f46;
    font-family:"Roboto";
    font-size:12px;
    font-weight:500;
   `

export const ProjectDescription = styled.p`
    color:#1e293b;
    font-family:"Roboto";
    font-size:12px;

   `

export const VisitLink = styled.a`
    text-align:center;
    color:#0967d2;
    font-family:"Roboto";
    font-size:14px;
    font-weight:600;
    text-decoration:none;
   `

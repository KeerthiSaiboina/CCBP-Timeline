import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
    display: flex;
    justify-conent: space-between;
    flex-direction:column;
    align-items: flex-start;
    width:100%;
`
export const CourseTitle = styled.h1`
   
   color:#171f46;
   font-family:"Roboto";
   font-size:16px;
   font-weight:700;
   margin:0px;
`
export const DurationContainer = styled.div`
    display: flex;
     justify-conent:center;
    align-items: center;
   
`

export const Duration = styled.p`
   
   color:#171f46;
   font-family:"Roboto";
   font-size:12px;
   font-weight:500;
   margin:0px;
`

export const CourseDescription = styled.p`
   
   color:#1e293b;
   font-family:"Roboto";
   font-size:12px;
   margin:0px;
`
export const CourseTagList = styled.ul`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    margin:0px;
    padding:0px;
`

export const CourseTagItem = styled.li`
    list-style-type:none;
    `

export const CourseTag = styled.p`
   background-color:#0967d2;
   color:#2b237c;
   font-family:"Roboto";
   font-size:10px;
   font-weight:500;
   margin:0px;
`

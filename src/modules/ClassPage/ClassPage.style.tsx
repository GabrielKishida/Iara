import styled from "styled-components";
import { Grid } from "../../components/theme/grid";

export const Course = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
export const Chapter = styled.div`
    border-bottom: solid 0.5px black;
`

export const ChapterCheckbox = styled.input`
    font-color: red;
`

export const CourseGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`
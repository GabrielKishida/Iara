import styled from "styled-components";
import { Grid } from "../../components/theme/grid";
import Button from 'react-bootstrap/Button'


export const CourseGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Card = styled.div`
    display: flex;
    width: 60%;
    background-color: white;
    border-radius: 20px;
    flex-direction: column;
    padding: 30px;
    margin-top: 50px;
`

export const SubmitButton = styled(Button)`
    display: inline-block;
    align-self: flex-end;
    margin-right: 20%;
    margin-top: 10px;
`

export const PageTitle = styled.div`
    display: inline-block;
    align-self: flex-start;
    margin-left: 20%;
    margin-top:30px;
`
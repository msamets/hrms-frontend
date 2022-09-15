import React from "react";
import "./Style.css";
import { Grid, Button } from "semantic-ui-react";
import JobSeekerTableForSystemEmployee from "./SystemEmployeeHomeComponents/JobSeekerTableForSystemEmployee";
import EmployerTableForSystemEmployee from "./SystemEmployeeHomeComponents/EmployerTableForSystemEmployee";
import JobAdvertisementTableForSystemEmployee from "./SystemEmployeeHomeComponents/JobAdvertisementTableForSystemEmployee";



export default function HomeForSystemEmployee() {
    return (
        <div className="homeForSystemEmployee">
            <Grid columns={3} divided>

                <Grid.Column className="homeForSystemEmployee--GridTitle" >

                    <h1>JobSeekers</h1>
                    <Button content="Click For Full List" />
                    <JobSeekerTableForSystemEmployee />
                    
                </Grid.Column>

                <Grid.Column className="homeForSystemEmployee--GridTitle">
                    <h1>Employers</h1>
                    <Button content="Click For Full List"/>
                    <EmployerTableForSystemEmployee/>
                </Grid.Column>

                <Grid.Column className="homeForSystemEmployee--GridTitle">
                    <h1>Job Advertisements</h1>
                    <Button content="Click For Full List" />
                    <JobAdvertisementTableForSystemEmployee/>
                </Grid.Column>
            </Grid>
        </div>
    )
}

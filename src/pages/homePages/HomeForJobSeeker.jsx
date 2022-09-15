import React from "react";
import { Grid } from "semantic-ui-react";
import CvListForJobSeekerHome from "./JobSeekerHomeComponents/CvListForJobSeekerHome";
import JobAdvertisementListForJobSeekerHome from "./JobSeekerHomeComponents/JobAdvertisementListForJobSeekerHome";
import MyPropertiesForJobSeekerHome from "./JobSeekerHomeComponents/MyPropertiesForJobSeekerHome";
import "./Style.css";


export default function HomeForJobSeeker() {
    return (
        <div className="homeForJobSeeker">
            <Grid columns={3} divided>

                <Grid.Column>
                    <div className="homeForJobSeeker--Title">
                        <h1>Job Advertisements</h1>
                        <JobAdvertisementListForJobSeekerHome/>
                    </div>
                </Grid.Column>

                <Grid.Column>
                    <div className="homeForJobSeeker--Title">
                        <h1>My cvs</h1>
                        <CvListForJobSeekerHome/>
                    </div>
                </Grid.Column>

                <Grid.Column>
                    <div className="homeForJobSeeker--Title">
                        <h1>My properties</h1>
                        <MyPropertiesForJobSeekerHome/>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
}
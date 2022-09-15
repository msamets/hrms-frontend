import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import CategoryForJobAdvertisementAppliedList from "./EmployerHomeComponents/CategoryForJobAdvertisementAppliedList";
import JobAdvertisementAppliedListForEmployerHome from "./EmployerHomeComponents/JobAdvertisementAppliedListForEmployerHome";
import JobAdvertisementListForEmployerHome from "./EmployerHomeComponents/JobAdvertisementListForEmployerHome";
import "./Style.css";





export default function HomeForEmployer() {
    return (
        <div className="homeForEmployer">
            <Segment>

                <Grid relaxed='very' divided>

                    <Grid.Column width={7}>
                        <div className="column">
                            <h1 className="homeForEmployer--Header">Job Advertisement i posted</h1>
                            <JobAdvertisementListForEmployerHome />

                        </div>
                    </Grid.Column>


                    <Grid.Column width={9}>
                        <div className="column">
                            <Grid relaxed = 'very'>
                                
                                <Grid.Column width={12}>
                                <h1 className="homeForEmployer--Header">Who applied to my job advertisements </h1>
                                <JobAdvertisementAppliedListForEmployerHome />
                                </Grid.Column>
                                
                                <Grid.Column width={4}>
                                <CategoryForJobAdvertisementAppliedList />
                                </Grid.Column>

                                </Grid>
                        </div>
                    </Grid.Column>

                    {/* <Grid.Column width={2}>
                        <div className="column">
                            <h1>Create Job Advertisement</h1>
                        </div>
                    </Grid.Column> */}
                </Grid>
            </Segment>
        </div>
    )
}


{/* <div>
    <h1>Job Advertisement i posted</h1>
    <h1>Create Job Advertisement</h1>
    <h1>Who applied to my job advertisements </h1>
</div> */}
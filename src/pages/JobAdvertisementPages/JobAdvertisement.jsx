import React from "react";
import "./JobAdvStyle.css";
import { Divider, Grid, GridColumn, Image, Icon, Button, Placeholder } from "semantic-ui-react";


//For public, for job seeker
export default function JobAdvertisementProps() {
    return (
        <div className="props--main">
            <div className="props--employer">
                <Grid>
                    <GridColumn width={2}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                            size='small' rounded />
                    </GridColumn>
                    <GridColumn width={12}>
                        <h1>Employer Company</h1>
                        <h4> <Icon name='world' />www.employerwebsite.com</h4>
                        <h4> <Icon name='mail'  />Employermail@employer.com</h4>
                    </GridColumn>
                    <GridColumn width={2} className="props--employer--button">
                        <Button >Apply To Job</Button>
                    </GridColumn>
                </Grid>
            </div>
            <Divider className="props-divider" />
            <div className="props--job">
                <div className="props--job--inside">
                    <Grid>
                        <GridColumn width={10}>
                        <h1>Job Position</h1>
                        <p>Job Detail</p>
                        
                        </GridColumn>

                        <GridColumn width={6}>
                        <h4><Icon name="calendar times outline"/> Application Deadline</h4>
                        <h4><Icon name="location arrow"/> City</h4>
                        <h3><Icon name="users" size="small" /> Open Position</h3>
                        <h3><Icon name="dollar sign"/> Salary info</h3>
                        </GridColumn>
                    </Grid>
                </div>

            </div>
            <Placeholder />
        </div>
    )
}
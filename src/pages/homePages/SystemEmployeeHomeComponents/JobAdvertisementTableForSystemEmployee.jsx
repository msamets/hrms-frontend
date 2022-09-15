import React from "react";
import "../Style.css";
import { Card,Button,Pagination } from "semantic-ui-react";



export default function JobAdvertisementTableForSystemEmployee(){
    return(
        <div className="jobAdvertisementTableForSystemEmployee">
            <Card.Group itemsPerRow={2}>
                <Card>
                    <Card.Content>
                        <Card.Header>Job Position</Card.Header>
                        <Card.Meta>Company</Card.Meta>
                        <Card.Description>
                            Active
                        </Card.Description>
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header content='Job Position' />
                        <Card.Meta content='Company' />
                        <Card.Description content='Active' />
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Job Position</Card.Header>
                        <Card.Meta>Company</Card.Meta>
                        <Card.Description>
                        Passive
                        </Card.Description>
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header content='Job Position' />
                        <Card.Meta content='Company' />
                        <Card.Description content='Active' />
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            <div className="jobAdvertisementTableForSystemEmployee--Pagination">
            <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                />
                </div>

        </div>
    )
}
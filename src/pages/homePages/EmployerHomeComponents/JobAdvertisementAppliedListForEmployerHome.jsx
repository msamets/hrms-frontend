import React from "react";
import { Card, CardDescription, Pagination, Button } from "semantic-ui-react";
import "../Style.css";




export default function JobAdvertisementAppliedListForEmployerHome() {
    return (
        <div>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Matthew Harris</Card.Header>
                        <Card.Meta>Job Position</Card.Meta>
                        <Card.Description>
                            Matthew is a pianist living in Nashville.
                        </Card.Description>
                        <CardDescription>
                            <div className="cardButton">
                                <Button content="Details" size="tiny" secondary />
                            </div>
                        </CardDescription>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Matthew Harris</Card.Header>
                        <Card.Meta>Job Position</Card.Meta>
                        <Card.Description>
                            Matthew is a pianist living in Nashville.
                        </Card.Description>
                        <CardDescription>
                            <div className="cardButton">
                                <Button content="Details" size="tiny" secondary />
                            </div>
                        </CardDescription>
                    </Card.Content>
                </Card>
            </Card.Group>
            <div className="homeForEmployer--Pagination">
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
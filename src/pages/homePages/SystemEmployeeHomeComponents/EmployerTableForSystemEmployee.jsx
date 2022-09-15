import React from "react";
import { Card, Button, Pagination } from "semantic-ui-react";
import "../Style.css";




export default function EmployerTableForSystemEmployee(){
    return(
        <div className="employerTableForSystemEmployee">
            <Card.Group itemsPerRow={2}>
                <Card>
                    <Card.Content>
                        <Card.Header>Matthew Harris</Card.Header>
                        <Card.Meta>Active</Card.Meta>
                        <Card.Description>
                            Created Date:
                        </Card.Description>
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header content='Jake Smith' />
                        <Card.Meta content='Pasive' />
                        <Card.Description content='Created Date:' />
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Matthew Harris</Card.Header>
                        <Card.Meta>Active</Card.Meta>
                        <Card.Description>
                            Created Date:
                        </Card.Description>
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header content='Jake Smith' />
                        <Card.Meta content='Pasive' />
                        <Card.Description content='Created Date:' />
                        <Card.Description>
                            <Button content = "Details" size="small"/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            <div className="employerTableForSystemEmployee--Pagination">
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
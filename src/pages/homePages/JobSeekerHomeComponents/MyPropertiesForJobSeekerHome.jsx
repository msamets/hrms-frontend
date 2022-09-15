import React from "react";
import { Table, Button, Pagination } from "semantic-ui-react";
import "../Style.css";



export default function MyPropertiesForJobSeekerHome(){
    return(
        <div className="myPropertiesforJobSeekerHome">
            <Table unstackable>
                <Table.Header>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Detail</Table.HeaderCell>
                    <Table.HeaderCell textAlign="right">
                        <Button content="Click For Full List" size="tiny" />
                    </Table.HeaderCell>
                </Table.Header>
                
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>School name</Table.Cell>
                        <Table.Cell>Graduation Date</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button content="Details" size="tiny"/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Language Name</Table.Cell>
                        <Table.Cell>Language Level</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button content="Details" size="tiny"/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Company from job experience</Table.Cell>
                        <Table.Cell>Job Position</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button content="Details" size="tiny"/>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <div>
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
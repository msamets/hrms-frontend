import React from "react";
import { Table, Pagination, Button } from "semantic-ui-react";



export default function JobAdvertisementListForEmployerHome() {
    return (
        <div>
            <Table unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell textAlign='right'>
                        <Button content ="Create New One" size="tiny"/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Example1</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                        <Table.Cell >Dev-Ops</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button content ="Details" size="tiny"/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Example2</Table.Cell>
                        <Table.Cell>Passive</Table.Cell>
                        <Table.Cell >Waiter</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button content ="Details" size="tiny"/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Example3</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                        <Table.Cell >Operation Manager</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button content ="Details" size="tiny"/>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

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
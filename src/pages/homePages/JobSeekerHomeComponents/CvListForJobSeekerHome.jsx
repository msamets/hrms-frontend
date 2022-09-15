import React from "react";
import { Button, Table, Pagination } from "semantic-ui-react";
import "../Style.css";



export default function CvListForJobSeekerHome(){
    return(
        <div className="cvListForJobSeeker">
            
            <Table unstackable>
                <Table.Header>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Created Date</Table.HeaderCell>
                    <Table.HeaderCell textAlign="right">
                        <Button content="Click For Full List" size="tiny" />
                    </Table.HeaderCell>
                </Table.Header>
                
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cv1</Table.Cell>
                        <Table.Cell>01/01/2000</Table.Cell>
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
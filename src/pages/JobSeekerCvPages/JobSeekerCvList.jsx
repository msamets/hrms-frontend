import React from "react";
import { Table, Icon, Button } from 'semantic-ui-react';
import "./CvStyle.css";


export default function JobSeekerCvList() {
    return (
        <div className="table">
            <Table striped >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Cv Name</Table.HeaderCell>
                        <Table.HeaderCell>School</Table.HeaderCell>
                        <Table.HeaderCell>Job Experience</Table.HeaderCell>
                        <Table.HeaderCell>Language</Table.HeaderCell>
                        <Table.HeaderCell>Photo</Table.HeaderCell>
                        <Table.HeaderCell>Github</Table.HeaderCell>
                        <Table.HeaderCell>Linkedin</Table.HeaderCell>
                        <Table.HeaderCell>Skill</Table.HeaderCell>
                        <Table.HeaderCell>CoverLetter</Table.HeaderCell>
                        <Table.HeaderCell width={1}></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell active>cv for bla bla</Table.Cell>
                        <Table.Cell>okullar</Table.Cell>
                        <Table.Cell>iş tecrübeleri</Table.Cell>
                        <Table.Cell positive ><Icon name='checkmark' /></Table.Cell>
                        <Table.Cell negative >None</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>
                            <Button basic color='brown' size="mini">
                                View Details
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
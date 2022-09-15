import React from "react";
import "./PageStyle.css";
import { Icon, Table, Button, Pagination, Placeholder } from "semantic-ui-react";



export default function SystemEmployeePermission() {
    return (
        <div className="permission">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employer Name</Table.HeaderCell>
                        <Table.HeaderCell>Employer Website</Table.HeaderCell>
                        <Table.HeaderCell>Employer Phone</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Email Verification </Table.HeaderCell>
                        <Table.HeaderCell width={1}>SystemEmployeePermission</Table.HeaderCell>
                        <Table.HeaderCell width={1} ></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Deneme</Table.Cell>
                        <Table.Cell>www.deneme.com</Table.Cell>
                        <Table.Cell>0 555 555 55 55</Table.Cell>
                        <Table.Cell positive><Icon name="check" /></Table.Cell>
                        <Table.Cell negative><Icon name="close" /></Table.Cell>
                        <Table.Cell>
                            <Button icon>
                                <Icon name='ellipsis vertical' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Deneme2</Table.Cell>
                        <Table.Cell>www.deneme2.com</Table.Cell>
                        <Table.Cell>0 555 555 55 55</Table.Cell>
                        <Table.Cell negative><Icon name="close" /></Table.Cell>
                        <Table.Cell negative><Icon name="close" /></Table.Cell>
                        <Table.Cell>
                            <Button icon>
                                <Icon name='ellipsis vertical' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>deneme3</Table.Cell>
                        <Table.Cell>www.deneme3.com</Table.Cell>
                        <Table.Cell>0 111 111 11 11</Table.Cell>
                        <Table.Cell positive>
                            <Icon name='check' />
                        </Table.Cell>
                        <Table.Cell positive>
                            <Icon name='check' />
                        </Table.Cell>
                        <Table.Cell>
                            <Button icon>
                                <Icon name='ellipsis vertical' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <div className="permission--pagination">
            <Pagination defaultActivePage={5} totalPages={10} />
            </div>
    
        </div>
        
    )
}
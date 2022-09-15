import React from "react";
import { Table, Icon, Button, Pagination, ButtonGroup } from "semantic-ui-react";
import "./PageStyle.css";



export default function WhoAppliedToJobAdv(){
    return(
        <div className="whoAppliedToJobAdv">
            
            <h1>Job Position</h1>
        
            <Table celled className="whoAppliedToJobAdv--Table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Cv</Table.HeaderCell>
                        <Table.HeaderCell>Conclusion</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Smith</Table.Cell>
                        <Table.Cell>www.example.com</Table.Cell>
                        <Table.Cell width={1}><Button content="Show Cv" /></Table.Cell>
                        <Table.Cell width={1}>
                            <ButtonGroup>
                            <Button icon = "check" size="tiny" />
                            <Button icon = "close" size="tiny" />
                            </ButtonGroup>
                        </Table.Cell>
                        
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Deneme2</Table.Cell>
                        <Table.Cell>www.deneme2.com</Table.Cell>
                        <Table.Cell><Button content="Show Cv" /></Table.Cell>
                        <Table.Cell width={1}>
                            <ButtonGroup>
                            <Button icon = "check" size="tiny" />
                            <Button icon = "close" size="tiny" />
                            </ButtonGroup>
                        </Table.Cell>
                        
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>deneme3</Table.Cell>
                        <Table.Cell>www.deneme3.com</Table.Cell>
                        <Table.Cell><Button content="Show Cv" /></Table.Cell>
                        <Table.Cell width={1}>
                            <ButtonGroup>
                            <Button icon = "check" size="tiny" />
                            <Button icon = "close" size="tiny" />
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <div className="whoAppliedToJobAdv--TablePagination">
            <Pagination defaultActivePage={5} totalPages={10} />
            </div>
        </div>
    )
}
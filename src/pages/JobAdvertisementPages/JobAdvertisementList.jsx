import React, { useState, useEffect } from "react";
import { Dropdown, Button, Pagination, Card, Icon, Grid, Segment, Input } from 'semantic-ui-react'
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider"
import JobAdvertisementService from "../../services/jobAdvertisementService";
import "./JobAdvStyle.css";

//buraya jobPositionları çek backend ten.
const selectOption = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

const cities = [
    { text: 'İstanbul', value: 'İstanbul' },
    { text: 'İzmir', value: 'İzmir' },
    { text: 'Ankara', value: 'Ankara' },
    { text: 'Antalya', value: 'Antalya' }
]



export default function JobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    //lifecycle hook
    useEffect(() => {//component yüklediğinde çalışmasını istediğin kodu buraya yazıyorsun
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getAll().then(result => setJobAdvertisements(result.data.data))
    })


    return (
        <Grid >
            
            <Grid.Column width={4}>
                <div className="jobAdvList--Category">

               <Dropdown
                    className="jobAdvList--Category-subComponent"
                    placeholder='Job Positions'
                    fluid
                    multiple
                    search                   
                    selection
                    options={selectOption} />

                <Dropdown
                    className="jobAdvList--Category-subComponent"
                    placeholder='Cities'
                    fluid
                    multiple
                    search
                    selection
                    options={cities} />


                 <div className="jobAdvList--Category-subComponent">
                    <Grid columns="equal">
                        <Grid.Column>
                    <Input
                    
                    size="small"
                    id="minSalary"
                    name="minSalary"
                    type="number"
                    placeholder="Minimum Salary"
                    />
                    </Grid.Column>
                    <Grid.Column>
                    <Input
                    
                    size="small"
                    id="maxSalary"
                    name="maxSalary"
                    type="number"
                    placeholder="Maximum Salary"
                    />
                    </Grid.Column>
                    </Grid>
                 </div >
                    <div className="jobAdvList--Category-subComponent">
                     <Button type="submit" content='Filter' primary />
                     <Button type="reset" content='Reset Filter' secondary />
                 </div>

                 </div>
            </Grid.Column>

            <Grid.Column width={12}>
                <div className="jobAdvCard-Container">
                    <div className="jobAdvCard-List">
                        <Card.Group>
                            {
                                 jobAdvertisements.map(jobAdvertisement => (

                                     <Card key={jobAdvertisement.id}>
                                         <Card.Content>
                                             <Card.Header>{jobAdvertisement.jobPosition.jobPositionName}</Card.Header>
                                            <Card.Meta>Şirket adı: {jobAdvertisement.employer.companyName}</Card.Meta>
                                             <Card.Description>Oluşturulma tarihi: {jobAdvertisement.createdDate}</Card.Description>
                                             <Card.Description>Bitiş tarihi: {jobAdvertisement.applicationDeadline}</Card.Description>
                                            <Card.Description>Yerinde/Uzaktan: {jobAdvertisement.workingType.type}</Card.Description>
                                             <Card.Description>Çalışma Şekli: {jobAdvertisement.workingTime.time}</Card.Description>
                                         </Card.Content>
                                        <Card.Content extra>

                                             <Card.Content>
                                                <Icon name='user' />{jobAdvertisement.numberOfOpenPosition}</Card.Content>
                                             <Button basic color='green' size="mini" floated="right"   >
                                                 View Details
                                             </Button>

                                        </Card.Content>
                                     </Card>

                                ))
                             }
                         </Card.Group>
                         </div>
                             <div className="pagination">
                                <Pagination
                                    


                                    defaultActivePage={1}
                                    firstItem={null}
                                    lastItem={null}
                                    pointing
                                    secondary
                                    totalPages={3}
                                />
                            </div>
                </div>
            </Grid.Column>
            
        </Grid>
    )
}

// <Grid>
        //     <div className="jobAdvList">

        //         <Grid.Column width={3} className="jobAdvList--Category">
        //             <div >
        //                 


        //             </div>
        //         </Grid.Column>

        //         <Grid.Column className="jobAdvList--Card" width={13}>
        //             <div >

                         

        //                 <Pagination


        //                     defaultActivePage={1}
        //                     firstItem={null}
        //                     lastItem={null}
        //                     pointing
        //                     secondary
        //                     totalPages={3}
        //                 />




        //             </div>
        //         </Grid.Column>


        //     </div>
        // </Grid>
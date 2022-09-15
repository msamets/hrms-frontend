import React, { useState, useEffect } from "react";
import { Dropdown, Button, Pagination, Card, Icon } from 'semantic-ui-react'
import MultiRangeSlider from "../../layouts/multiRangeSlider/MultiRangeSlider"
import JobAdvertisementService from "../../services/jobAdvertisementService";

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



export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    //lifecycle hook
    useEffect(() => {//component yüklediğinde çalışmasını istediğin kodu buraya yazıyorsun
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    })


    return (
        <div>
            <div className="jobAdv--Categories">
                <Dropdown
                    style={{
                        maxWidth: 200, position: 'absolute', left: '1.5%', top: '45%'
                    }}
                    placeholder='Job Positions'
                    fluid
                    multiple
                    search
                    selection
                    options={selectOption} />

                <Dropdown
                    style={{
                        maxWidth: 200, position: 'absolute', left: '1.5%', top: '35%'
                    }}
                    placeholder='Cities'
                    fluid
                    multiple
                    search
                    selection
                    options={cities} />


                <MultiRangeSlider
                    min={0}// buraya salaryler gelecek
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
                <div
                    style={{
                        maxWidth: 300, position: 'absolute', left: '1.5%', top: '55%'
                    }}>
                    <Button content='Filter' primary />
                    <Button content='Reset Filter' secondary />
                </div>

                <Pagination
                    style={{
                        maxWidth: 300, position: 'absolute', left: '45%', top: '90%'
                    }}

                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={3}
                />

            </div>


            <div className="jobAdv--List"
                style={{
                    maxWidth: 400, position: 'fixed', left: '300px', top: '130px',
                }}
            >

                <Card.Group>
                    {
                        jobAdvertisements.map(jobAdvertisement => (

                            <Card key={jobAdvertisement.id}>
                                <Card.Content>
                                    <Card.Header>{jobAdvertisement.jobPosition.jobPositionName}</Card.Header>
                                    <Card.Meta>{jobAdvertisement.employer.sirketAdi}</Card.Meta>
                                    <Card.Description>{jobAdvertisement.createdDate}</Card.Description>
                                    <Card.Description>{jobAdvertisement.applicationDeadline}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    
                                    <Card.Content>
                                    <Icon name='user'/>{jobAdvertisement.openPosition}</Card.Content>
                                    <Button basic color='green' size="mini" floated="right"   >
                                        View Details
                                    </Button>
                                    
                                </Card.Content>
                            </Card>

                        ))
                    }
                </Card.Group>




            </div>


        </div>
    )
}

/*

<div 
            style={{
                maxWidth: 400, position: 'fixed', left: '300px', top: '130px',
            }}>
                <div >
                    <JobAdvertisementCard className="card" />
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                </div >
                <div 
                style={{
                maxWidth: 400, position: 'fixed', left: '600px', top: '130px',
            }}>
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                </div>
                <div  
                style={{
                    maxWidth: 400, position: 'fixed', left: '900px', top: '130px',
                }}>
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                </div>
                <div  
                style={{
                    maxWidth: 400, position: 'fixed', left: '1200px', top: '130px',
                }}>
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                    <JobAdvertisementCard className="card"/>
                </div>
            </div>

*/
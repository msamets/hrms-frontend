import React from "react";
import { Button, Dropdown } from "semantic-ui-react";


const jobPositions = [
    { key: 'jfd', value: 'jfd', text: 'Java Front-End Developer' },
    { key: 'jbd', value: 'jbd', text: 'Java Back-End Developer' }

]

const jobAdvertisements = [
    { key: 'jfd', value: 'jfd', text: 'Örnek iş ilanı 1' },
    { key: 'jbd', value: 'jbd', text: 'Örnek iş ilanı 2' }
]


export default function CategoryForJobAdvertisementAppliedList() {
    return (
        <div>
            <div className="homeForEmployer--JobAdvCategory">
                <Dropdown
                    placeholder='Select Job Position'
                    fluid
                    search
                    selection
                    options={jobPositions}
                />

            </div>
            <div className="homeForEmployer--JobAdvCategory">
                <Dropdown
                    placeholder='Select Job Advertisement'
                    fluid
                    search
                    selection
                    options={jobAdvertisements}
                />
            </div>
            <div className="homeForEmployer--JobAdvCategory">
            <Button content = "Search" />
            </div>
        </div>
    )
}
import React from "react";
import "./CvStyle.css";
import { Icon, Image, Divider } from "semantic-ui-react";


export default function JobSeekerCvProps() {
    return (
        <div className="cv">
            <div className="cv--header">
                <h1>Cv name</h1>
            </div>
            <div className="cv--props">
                <Image className="props--image"
                    src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                    size='small' circular />

                <h1>Name Surname</h1>
                <h3>Job Title</h3>
                
                <Icon name="mail" size="large" />Email
                
                <div className="github--linkedin">
                    <Icon name="github square" size="big" />
                    <Icon name="linkedin" size="big" />
                </div>
                <Divider inverted />
                <div className="descriptions">
                    <div className="descriptions--inside">
                    <h3>Cover Letter</h3>
                    <p>blablabla</p>
                    </div>
                </div>

                <div className="descriptions">
                    <div className="descriptions--inside">
                    <h3>Educations</h3>
                    <p>blablabla</p>
                    </div>
                </div>

                <div className="descriptions">
                    <div className="descriptions--inside">
                    <h3>Job Experiences</h3>
                    <p>blablabla</p>
                    </div>
                </div>

                <div className="descriptions">
                    <div className="descriptions--inside">
                    <h3>Languages</h3>
                    <p>blablabla</p>
                    </div>
                </div>

                <div className="descriptions">
                    <div className="descriptions--inside">
                    <h3>Skills</h3>
                    <p>blablabla</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
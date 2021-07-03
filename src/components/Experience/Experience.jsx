import React from 'react';
import './Experience.css';

export default function Experience() {
    const [activeJob, setActiveJob] = React.useState('Hack the Northeast');

    return (
        <div className={'experience-container'}>
            <div className={'experience-header-container'}>
                <h3 className={'experience-header'}>Experience</h3>
            </div>

            <div className="experience-content-container">
                <h3>{activeJob}</h3>
            </div>


        </div>
    )
}

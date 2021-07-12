import React from 'react';
import './Projects.css';

import SectionHeading from '../util/SectionHeading/SectionHeading';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import OtherProject from './OtherProject/OtherProject';

import NHLSimulation from '../../images/Projects/NHLSimulation.png';
import ImproveMint from '../../images/Projects/ImproveMint.png';
import PillsOnWheels from '../../images/Projects/PillsOnWheels.png';

export default function Projects() {

    const featuredProjects = [
        {
            name: 'NHL Simulation',
            img: NHLSimulation,
            type: 'download',
            technologies: [
                'Python',
                'kivy',
                'requests'
            ],
            summary: 'A desktop application that takes the stats of every NHL Player and uses them to create a realistic simulation of an NHL season',
            githubLink: 'https://github.com/reezanvisram/NHLSimulation',
            releaseLink: process.env.PUBLIC_URL + "/NHLSimulation.zip"
        },
        {
            name: 'ImproveMint',
            img: ImproveMint,
            type: 'web',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
                'Python (Flask)',
                'MySQL'
            ],
            summary: 'A self-improvement website where users can trask tasks and habits that they want to build',
            githubLink: 'https://github.com/reezanvisram/improvemint',
            releaseLink: 'http://www.reezanvisram.com/improvemint'
        },
        {
            name: 'PillsOnWheels',
            img: PillsOnWheels,
            type: 'web',
            technologies: [
                'React Native',
                'Python (Flask)',
                'SQLite'
            ],
            summary: 'An Android app for users to manage presecriptions, as well as order them for delivery. It is deployed on the Google Play Store',
            githubLink: 'https://github.com/reezanvisram/PillsOnWheels',
            releaseLink: 'https://play.google.com/store/apps/details?id=com.Visram_INC.PillsOnWheels'
        }
    ]

    const otherProjects = [
        {
            name: 'Pharmaceutica',
            type: 'download',
            technologies: [
                'C#',
                'Unity Game Engine'
            ],
            summary: 'A tycoon game where a user takes control of a pharmaceutical company racing to develop a vaccine for COVID-19',
            githubLink: 'https://github.com/reezanvisram/pharmaceutica',
            releaseLink: process.env.PUBLIC_URL + '/Pharmaceutica.zip'
        },
        {
            name: 'Complete Crisis Coverage',
            type: 'web',
            technologies: [
                'HTML',
                'Bootstrap',
                'Flask',
                'MySQL'
            ],
            summary: 'A website where users can see COVID-19 Statistics from all over the world, as well as read firsthand stories of how COVID-19 has affected people globally',
            githubLink: 'https://github.com/reezanvisram/completecrisiscoverage',
            releaseLink: 'http://www.reezanvisram.com/completecrisiscoverage'
        },
        {
            name: 'Arduino Information Display',
            type: 'web',
            technologies: [
                'Arduino',
                'C++'
            ],
            summary: 'A heads up display that shows the date, time, humidity and temperature, controlled using an IR remote',
            githubLink: 'https://github.com/reezanvisram/arduinoinformationdisplay',
            releaseLink: 'https://github.com/reezanvisram/arduinoinformationdisplay'
        }
    ]


    return (
        <div className={'projects-container'}>
            <SectionHeading heading={'Projects'} />
        
            <div className="featured-projects-content-container">
                {featuredProjects.map((project) => {
                    return <FeaturedProject project={project} />
                })}
            </div>

            <div className="other-projects-content-container">
                {otherProjects.map((project) => {
                    return <OtherProject project={project} />
                })}
            </div>
        </div>
    )
}

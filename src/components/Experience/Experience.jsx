import React from 'react';
import './Experience.css';
import shortid from 'shortid';

import SectionHeading from '../util/SectionHeading/SectionHeading';

export default function Experience() {
    const jobs = [
        {
            id: 0,
            company: 'Red Thread Innovations',
            title: 'Software Engineering Intern (Co-op)',
            time: 'January 2022 - April 2022',
            points: [
                'Developed a full-stack application management system and multiple microservices using React, Express, TypeScript and PostgreSQL, used by over 10 companies',
                'Wrote automated test suites to achieve 99% code coverage using Jest and React-Testing-Library',
                'Containerized applications and microservices using Docker to deploy to AWS EC2 environments',
                'Worked in an Agile team framework, and participated in and led various ceremonies, including 2-week sprints, sprint review, sprint retrospective and daily stand-ups',
                'Initiated and led discussions about improving workflow and increasing efficiency, leading to increased velocity and quality of deliverables',
            ],
            technologies: [
                'TypeScript (React, Express)',
                'PostgreSQL (TypeORM)',
                'Docker',
                'Jest',
            ],
        },
        {
            id: 1,
            company: 'Hack the Northeast',
            title: 'Frontend Developer',
            time: 'August 2020 - June 2021',
            points: [
                'Developed the frontend UI of the entire Hack the Northeast website (www.hackthenortheast.com) using React and Material UI',
                'Built out animations (sliding, fading, spinning, enlarging) using GSAP.js',
                'Created functional and informative components for over 1000 prospective participants to learn about and sign up for events',
                'Worked with graphic designers and provided recommendations to design teams to streamline and enhance the website',
                'Tested and fixed all components of the website before deploying to GitHub',
                'Used responsive design principles and technologies to ensure the website looked stunning on all screen sizes',
            ],
            technologies: [
                'ReactJS',
                'Material UI',
                'GSAP.js',
                'Git',
                'Github',
            ],
        },

        {
            id: 2,
            company: 'Dunbarton High School',
            title: 'Math Tutor',
            time: 'January 2018 - March 2020',
            points: [
                'Conducted one-on-one learning sessions for Mathematics',
                'Evaluated student performance and provided academic counselling as needed',
                'Selected as a “Peer Tutor” to aid struggling grade 9 students build the foundations necessary to succeed in Mathematics courses throughout high school and beyond',
            ],
        },
    ];

    const [activeJob, setActiveJob] = React.useState(jobs[0]);

    const getId = () => {
        const id = shortid.generate();
        return id;
    };

    return (
        <div className={'experience-container'}>
            <SectionHeading heading={'Experience'} />

            <div className={'experience-content-container'}>
                <div className={'job-button-container'}>
                    {jobs.map((job) => {
                        if (
                            activeJob.company === job.company &&
                            activeJob.title === job.title
                        ) {
                            return (
                                <button
                                    className={'job-button active'}
                                    onClick={() => setActiveJob(jobs[job.id])}
                                >
                                    {job.company}
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    className={'job-button'}
                                    onClick={() => setActiveJob(jobs[job.id])}
                                >
                                    {job.company}
                                </button>
                            );
                        }
                    })}
                </div>

                <div key={getId()} className={'active-job-information'}>
                    <div className={'active-job-heading'}>
                        <h4>
                            {activeJob.title} @ {activeJob.company}
                        </h4>
                        <p>{activeJob.time}</p>
                    </div>

                    <div className={'active-job-description'}>
                        <ul className={'active-job-points-list'}>
                            {activeJob.points.map((point) => {
                                return (
                                    <li>
                                        {point} <br />
                                    </li>
                                );
                            })}
                        </ul>
                        {activeJob.technologies && (
                            <h5>
                                Technologies:{' '}
                                {activeJob.technologies.join(', ')}
                            </h5>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

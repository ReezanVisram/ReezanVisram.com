import React from 'react';
import './Experience.css';
import shortid from 'shortid';

import SectionHeading from '../util/SectionHeading/SectionHeading';

export default function Experience() {
    const jobs = [
        {
            id: 0,
            company: 'ecobee',
            title: 'Software Engineering Intern (Co-op)',
            time: 'May 2023 - August 2023',
            location: 'Toronto, ON',
            points: [
                'Developed backend cloud microservices using Go and Typescript utilizing Google Cloud Platform (GCP)',
                'Designed a new service to retry failed IoTCore device commands using GKE, Pub/Sub and Cloud Functions, reducing error rate by 90%',
                'Utilized BigQuery for data analysis on push notification performance, allowing the team to identify areas of performance improvement, achieving 99% reliability',
                'Wrote unit, integration, and end-to-end tests to ensure seamless integration of changes, contributing to the 99.9% service uptime goal',
                'Optimized and tested production-ready services, ensuring scalability to handle an additional 100+ req/s',
                'Enhanced the auto-trial experience when a user registers a device, increasing customer retention by 15%',
                'Implemented new gRPC endpoints and GraphQL mutations to enhance the customer setup experience',
                'Created Grafana dashboards for real-time performance monitoring of 8+ microservices',
                'Updated tickets in Jira daily with progress and status of tasks that were assigned',
                'Deployed code continuously to staging and production environments using CircleCI',
                'Conducted code reviews on Github, leading to extremely readable, high-quality code',
            ],
            technologies: [
                'Go',
                'TypeScript',
                'GCP',
                'gRPC',
                'Apollo GraphQL',
                'Grafana',
                'Terraform',
                'Docker',
                'Kubernetes',
                'Github',
                'Jira',
                'CircleCI'
            ],
        },
        {
            id: 1,
            company: 'BlackBerry',
            title: 'Software Developer Intern (Co-op)',
            time: 'September 2022 - December 2022',
            location: 'Waterloo, ON',
            points: [
                'Developed backend cloud microservices and AWS Lambda functions using Python and Go, as part of the Endpoint Detection and Response team',
                'Created and implemented a new bulk GET API, increasing request bandwidth by over 50x',
                'Optimized an EQL to SQL translator library, reducing query times by over 90% and improving stability',
                'Demonstrated features in front of performance and testing teams, getting feedback and performance stats',
                'Wrote Python scripts to delete bad records from microservice caches thereby reducing costs in multiple regions',
                'Enhanced microservice and Lambda function logging to reduce noise and alert the team to issues earlier, leading to reduced cost and time savings',
                'Implemented cache statistics logging, allowing the team to identify bottlenecks and areas of cost-savings',
                'Deployed microservices to ephemeral, staging and production AWS environments using Jenkins',
                'Wrote initial deployment smoke tests to ensure that microservices were configured properly before deployment, saving time and resources if build was misconfigured',
                'Updated tickets in Jira daily with progress and status of issues that were assigned',
                'Reviewed code written by team members in Bitbucket, and gave approval for pull requests to be merged, ensuring high code quality',
            ],
            technologies: [
                'Python',
                'Go',
                'Docker',
                'EQL',
                'Redis',
                'MySQL',
                'AWS',
                'Git',
                'Jira',
                'Bitbucket',
                'Jenkins'
            ],
        },
        {
            id: 2,
            company: 'Red Thread Innovations',
            title: 'Software Engineering Intern (Co-op)',
            time: 'January 2022 - April 2022',
            location: 'Toronto, ON',
            points: [
                'Developed a full-stack application management system and multiple microservices using React, Express, TypeScript and PostgreSQL, used by over 10 companies',
                'Wrote automated test suites to achieve 99% code coverage using Jest and React-Testing-Library',
                'Containerized applications and microservices using Docker and deployed to AWS EC2 environments',
                'Worked in an Agile team framework, and participated in and led various ceremonies, including 2-week sprints, sprint review, sprint retrospective and daily stand-ups',
                'Initiated and led discussions about improving workflow and increasing efficiency, leading to increased velocity and quality of deliverables',
            ],
            technologies: [
                'TypeScript (React, Express)',
                'PostgreSQL (TypeORM)',
                'Docker',
                'Jest',
                'AWS EC2',
            ],
        },
        {
            id: 3,
            company: 'Hack the Northeast',
            title: 'Frontend Developer (Remote & Part-time)',
            time: 'August 2020 - June 2021',
            location: 'Toronto, ON',
            points: [
                'Developed the frontend UI of the entire Hack the Northeast website using React and Material UI',
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
                        <div className={'active-job-extra'}>
                            <p>{activeJob.time}</p>
                            <p className={'active-job-location'}>{activeJob.location}</p>
                        </div>
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

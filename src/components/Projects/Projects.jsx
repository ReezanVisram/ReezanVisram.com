import React from 'react';
import './Projects.css';

import SectionHeading from '../util/SectionHeading/SectionHeading';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import OtherProject from './OtherProject/OtherProject';

import NHLSimulation from '../../images/Projects/NHLSimulation.png';
import TypeR from '../../images/Projects/TypeR.png';
import FractalVisualizer from '../../images/Projects/FractalVisualizer.png';
import MorseCodeTeachingDevice from '../../images/Projects/MorseCodeTeachingDevice.png';
import Chess from '../../images/Projects/Chess.png'

export default function Projects() {
    const featuredProjects = [
        {
            name: '3D Chess',
            img: Chess,
            type: 'download',
            technologies: [
                'C++',
                'OpenGL',
            ],
            summary: 'A human-vs-human 3D chess game, intended to simulate playing over-the-board chess',
            githubLink: 'https://github.com/reezanvisram/chess',
            releaseLink: process.env.PUBLIC_URL + './Chess.zip'
        },
        {
            name: 'TypeR',
            img: TypeR,
            type: 'web',
            technologies: [
                'TypeScript (React, Express)',
                'MySQL (TypeORM)',
                'Docker',
                'Python (requests, pony ORM)',
            ],
            summary:
                'A hub for custom mechanical keyboard components. Data scraped daily from many major component retailers and compiled into one site.',
            githubLink: 'https://github.com/reezanvisram/TypeR',
            releaseLink: 'https://typer.reezanvisram.com',
        },
        {
            name: 'FractalVisualizer',
            img: FractalVisualizer,
            type: 'download',
            technologies: ['C++', 'OpenGL', 'Dear ImGui'],
            summary:
                'A C++ and OpenGL program to render customizable and interactive fractals, such as the Mandelbrot Set and Heighway Dragon.',
            githubLink: 'https://github.com/reezanvisram/fractalvisualizer',
            releaseLink: process.env.PUBLIC_URL + '/FractalVisualizer.zip',
        },
        {
            name: 'Morse Code Teaching Device',
            img: MorseCodeTeachingDevice,
            type: 'web',
            technologies: [
                'C',
                'PlatformIO',
                'STM32 Nucleo F410RE Microcontroller',
            ],
            summary:
                'An electronic device that teaches the user the basics of Morse code (reading, listening, speaking) through constant repetition',
            githubLink:
                'https://github.com/reezanvisram/morse-code-teaching-device',
            releaseLink:
                'https://github.com/reezanvisram/morse-code-teaching-device',
        },
        {
            name: 'NHL Simulation',
            img: NHLSimulation,
            type: 'download',
            technologies: ['Python', 'kivy', 'requests'],
            summary:
                'A desktop application that takes the stats of every NHL Player and uses them to create a realistic simulation of an NHL season',
            githubLink: 'https://github.com/reezanvisram/NHLSimulation',
            releaseLink: process.env.PUBLIC_URL + '/NHLSimulation.zip',
        },
    ];

    const otherProjects = [
        {
            name: 'Pharmaceutica',
            type: 'download',
            technologies: ['C#', 'Unity Game Engine'],
            summary:
                'A tycoon game where a user takes control of a pharmaceutical company racing to develop a vaccine for COVID-19',
            githubLink: 'https://github.com/reezanvisram/pharmaceutica',
            releaseLink: process.env.PUBLIC_URL + '/Pharmaceutica.zip',
        },
        {
            name: 'ImproveMint',
            type: 'web',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
                'Python (Flask)',
                'MySQL',
            ],
            summary:
                'A self-improvement website where users can trask tasks and habits that they want to build',
            githubLink: 'https://github.com/reezanvisram/improvemint',
            releaseLink: 'http://www.reezanvisram.com/improvemint',
        },
        {
            name: 'PillsOnWheels',
            type: 'web',
            technologies: ['React Native', 'Python (Flask)', 'SQLite'],
            summary:
                'An Android app for users to manage presecriptions, as well as order them for delivery. It is deployed on the Google Play Store',
            githubLink: 'https://github.com/reezanvisram/PillsOnWheels',
            releaseLink:
                'https://play.google.com/store/apps/details?id=com.Visram_INC.PillsOnWheels',
        },
        {
            name: 'Complete Crisis Coverage',
            type: 'web',
            technologies: ['HTML', 'Bootstrap', 'Flask', 'MySQL'],
            summary:
                'A website where users can see COVID-19 Statistics from all over the world, as well as read firsthand stories of how COVID-19 has affected people globally',
            githubLink:
                'https://github.com/reezanvisram/completecrisiscoverage',
            releaseLink: 'http://www.reezanvisram.com/completecrisiscoverage',
        },
        {
            name: 'Arduino Information Display',
            type: 'web',
            technologies: ['Arduino', 'C++'],
            summary:
                'A heads up display that shows the date, time, humidity and temperature, controlled using an IR remote',
            githubLink:
                'https://github.com/reezanvisram/arduinoinformationdisplay',
            releaseLink:
                'https://github.com/reezanvisram/arduinoinformationdisplay',
        },
    ];

    return (
        <div className={'projects-container'}>
            <SectionHeading heading={'Projects'} />

            <div className='featured-projects-content-container'>
                {featuredProjects.map((project) => {
                    return <FeaturedProject project={project} />;
                })}
            </div>

            <div className='other-projects-content-container'>
                {otherProjects.map((project) => {
                    return <OtherProject project={project} />;
                })}
            </div>
        </div>
    );
}

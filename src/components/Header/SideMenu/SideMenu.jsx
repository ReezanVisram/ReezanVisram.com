import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './SideMenu.css';

import Resume from '../../Resume.pdf';

export default function SideMenu({ classes }) {

    let menuClasses = 'side-menu-container';

    if (classes === 'active') {
        menuClasses = 'side-menu-container active'
    } else if (classes === 'inactive') {
        menuClasses = 'side-menu-container inactive'
    }

    return (
        <div className={menuClasses}>
             <ul className={'side-menu-link-container'}>
                <li>
                    <AnchorLink className={'anchor-link'} href='#education'><p>Education</p></AnchorLink>
                </li>
                <li>
                    <AnchorLink className={'anchor-link'} href='#experience'><p>Experience</p></AnchorLink>
                </li>
                <li>
                    <AnchorLink className={'anchor-link'} href='#projects'><p>Projects</p></AnchorLink>
                </li>
                <li>
                    <a className={'anchor-link resume'} href={Resume} target='_blank' rel='noreferrer'>Resume</a>
                </li>
            </ul>
        </div>
    )
}

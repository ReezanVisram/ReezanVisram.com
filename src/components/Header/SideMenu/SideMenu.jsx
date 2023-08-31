import AnchorLink from 'react-anchor-link-smooth-scroll';

import './SideMenu.css';

import Resume from '../../Resume.pdf';
import { useEffect, useState } from 'react';

export default function SideMenu({ show, onClick }) {
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setRender(true)
            }, 100)
        } else {
            setRender(false)
        }

    }, [show])


    return (
        <div className={render ? 'side-menu-container active' : 'side-menu-container inactive'}>
             <ul className={'side-menu-link-container'}>
                <li>
                    <AnchorLink className={'anchor-link'} href='#education' onClick={onClick}><p>Education</p></AnchorLink>
                </li>
                <li>
                    <AnchorLink className={'anchor-link'} href='#experience' onClick={onClick}><p>Experience</p></AnchorLink>
                </li>
                <li>
                    <AnchorLink className={'anchor-link'} href='#projects' onClick={onClick}><p>Projects</p></AnchorLink>
                </li>
                <li>
                    <a className={'anchor-link'} href='https://github.com/reezanvisram' target="_blank" rel="noreferrer" onClick={onClick}><p>Github</p></a>
                </li>
                <li>
                    <a className={'anchor-link resume'} href={Resume} target='_blank' rel='noreferrer' onClick={onClick}>Resume</a>
                </li>
            </ul>
        </div>
    )
}

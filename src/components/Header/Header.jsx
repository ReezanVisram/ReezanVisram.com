import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SideMenu from './SideMenu/SideMenu';
import './Header.css';
import { useWindowSize } from '../../lib/hooks';


import Resume from '../Resume.pdf';

export default function Header() {
    const [isSideMenuExpanded, setIsSideMenuExpanded] = useState(false);
    // eslint-disable-next-line
    const [width, height] = useWindowSize();

    const handleSideMenuExpanded = () => {
        setIsSideMenuExpanded(!isSideMenuExpanded);
    }

    useEffect(() => {
        if (width >= 1024) {
            setIsSideMenuExpanded(false);
        }
    }, [width])

    useEffect(() => {
        if (isSideMenuExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSideMenuExpanded])
    let navbarIcon;
    if (!isSideMenuExpanded) {
        navbarIcon = <MenuIcon fontSize={'large'} />
    } else {
        navbarIcon = <CloseIcon fontSize={'large'} />
    }


    return (
        <div className={'header-container'}>
            <AnchorLink className={'anchor-link main-header'} href='#landing'><h1>Reezan Visram</h1></AnchorLink>
            <ul className={'header-link-container'}>
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
                    <a className={'anchor-link'} href='https://github.com/reezanvisram' target="_blank" rel="noreferrer"><p>Github</p></a>
                </li>
                <li>
                    <a className={'anchor-link'} href='https://linkedin.com/in/reezan-visram' target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
                </li>
                <li>
                    <a className={'anchor-link resume'} href={Resume} target='_blank' rel='noreferrer'>Resume</a>
                </li>
            </ul>
            <div className={'menu-icon'} onClick={handleSideMenuExpanded}>
                {navbarIcon}
            </div>

            <SideMenu show={isSideMenuExpanded} onClick={handleSideMenuExpanded} />
            

        </div>
    )
}

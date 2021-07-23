import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SideMenu from './SideMenu/SideMenu';
import './Header.css';


import Resume from '../Resume.pdf';

export default function Header() {
    const [activeClasses, setActiveClasses] = React.useState('inactive')


    const changeActiveState = () => {
        if (activeClasses === 'active') {
            setActiveClasses('inactive');
        } else {
            setActiveClasses('active');
        }
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
                    <a className={'anchor-link resume'} href={Resume} target='_blank' rel='noreferrer'>Resume</a>
                </li>
            </ul>
            <div className={'menu-icon'} onClick={() => changeActiveState()}>
                {activeClasses === 'inactive' &&
                    <MenuIcon fontSize={'large'} />
                }

                {activeClasses === 'active' &&
                    <CloseIcon fontSize={'large'} />
                }
                
            </div>


            <SideMenu classes={activeClasses} />

        </div>
    )
}

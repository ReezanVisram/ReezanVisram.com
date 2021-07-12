import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Footer() {
    return (
        <div className={'footer-container'}>
               <h3>Reezan Visram</h3>
               <div className={'footer-icon-container'}>
                   <a href='https://instagram.com/reezanvisram' target='_blank' rel='noreferrer'><InstagramIcon style={{fontSize: '2rem'}} /></a>
                   <a href='https://github.com/reezanvisram' target='_blank' rel='noreferrer'><GitHubIcon style={{fontSize: '2rem'}} /></a>
               </div>
        </div>
    )
}

import React from 'react';
import './Landing.css';
import Me from '../../images/Me.jpg';

export default function Landing() {
    return (
        <div className={'container'}>
            <div className='intro-container'>
                <div className={'intro-header-container'}>
                    <h3>Hi I'm</h3>
                    <h1>Reezan Visram</h1>
                </div>
                <p className={'intro-brief'}>I'm a Computer Engineering Student at the <span className={'intro-school'}>University of Waterloo</span></p>
            </div>
            <img className={'intro-image'} src={Me} alt='Reezan Visram'></img>
        </div>
    )
}

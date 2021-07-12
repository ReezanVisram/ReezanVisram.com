import React from 'react';
import './Education.css';

import SectionHeading from '../util/SectionHeading/SectionHeading';

export default function Education() {
    return (
        <div className={'education-container'}>
            <SectionHeading heading={'Education'} />
            <div className={'education-content-container'}>
                <div className={'school-container'}>
                    <h3 className={'school-name'}>University of Waterloo</h3>
                    <h4 className={'degree'}>Bachelor of Applied Science in Honours Computer Engineering, Co-op</h4>
                
                    <div className={'education-entrance-award-container'}>
                        <h4 className={'awards-header'}>Entrance Awards</h4>
                        <ul className={'awards-list'}>
                            <li>University of Waterloo - President's Scholarship of Distinction Award - Awarded for an admission average of 99%</li>
                            <li>University of Waterloo - Rachel and Elizabeth Madter Scholarship Award - Awarded to outstanding students entering Computer Engineering</li>
                        </ul>
                    </div>
                </div>
                
            </div>    
        </div>
    )
}

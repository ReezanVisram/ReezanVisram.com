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
                    <h4 className={'degree'}>Candidate for Bachelor of Applied Science - Honours Computer Engineering, Co-op</h4>
                    <h5>Sept. 2021 - Apr. 2026</h5>
                    <div className={'education-entrance-award-container'}>
                        <h4 className={'awards-header'}>Awards</h4>
                        <ul className={'awards-list'}>
                            <li>University of Waterloo - President's Scholarship of Distinction Award - Awarded for an admission average of 99%</li>
                            <li>University of Waterloo - Richard and Elizabeth Madter Scholarship Award - Awarded to outstanding students entering Computer Engineering</li>
                        </ul>
                    </div>
                </div>
                
            </div>    
        </div>
    )
}

import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({ heading }) {
    return (
    <div className={'section-heading-container'}>
        <h3 className={'section-heading'}>{ heading }</h3>
    </div>
    )
}

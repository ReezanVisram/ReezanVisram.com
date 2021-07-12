import React from 'react';
import './OtherProject.css';

import GitHubIcon from '@material-ui/icons/GitHub'
import GetAppIcon from '@material-ui/icons/GetApp';
import LaunchIcon from '@material-ui/icons/Launch';

export default function OtherProject({ project }) {
    return (
        <div className={'other-project-container'}>
            <div className={'other-project-content-container'}>
                <h4 className={'other-project-title'}>{project.name}</h4>
                <div className={'other-project-detail-container'}>
                    <p className={'other-project-summary'}>{project.summary}</p>

                    <div className={'other-project-icon-container'}>
                        <p>{project.technologies.join(', ')}</p>
                        <div className={'icons'}>
                            <a href={project.githubLink} target='_blank' rel='noreferrer'><GitHubIcon /></a>
                            {project.type === 'download' && 
                                <a href={project.releaseLink} download><GetAppIcon /></a>
                            }

                            {project.type === 'web' &&
                                <a href={project.releaseLink} target='_blank' rel='noreferrer'><LaunchIcon /></a>
                            }
                        </div>
                        
                    </div>
                </div>

            </div>
           
        </div>
    )
}

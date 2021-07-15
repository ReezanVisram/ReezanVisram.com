import React from 'react';
import './FeaturedProject.css';

import GitHubIcon from '@material-ui/icons/GitHub'
import GetAppIcon from '@material-ui/icons/GetApp';
import LaunchIcon from '@material-ui/icons/Launch';

export default function FeaturedProject({ project }) {
    return (
        <div className={'featured-project-container'}>
            <div className={'featured-project-main-container'}>
                {project.type === 'download' &&
                    <a className={'featured-project-title-link'} href={project.releaseLink} download>
                        <h4>{project.name}</h4>
                    </a>
                }

                {project.type === 'web' && 
                    <a className={'featured-project-title-link'} href={project.releaseLink} target="_blank" rel="noreferrer">
                        <h4>{project.name}</h4>
                    </a>
                }

                {project.type === 'download' &&
                    <a className={'featured-project-image-link'} href={project.releaseLink} download><img className={'featured-project-img'} src={project.img} alt={project.name} /></a>
                }

                {project.type === 'web' && 
                    <a className={'featured-project-image-link'} href={project.releaseLink} target="_blank" rel="noreferrer"><img className={'featured-project-img'} src={project.img} alt={project.name} /></a>
                }
               
            </div>
            
            <div className={'featured-project-detail-container'}>
                <p className={'featured-project-summary'}>{project.summary}</p>

                <div className={'featured-project-icon-container'}>
                    <p className={'featured-project-technologies'}>{project.technologies.join(', ')}</p>
                    <div>
                        <a href={project.githubLink} target="_blank" rel="noreferrer"><GitHubIcon /></a>

                            {project.type === 'download' && 
                                <a href={project.releaseLink} download><GetAppIcon className={'featured-project-release-icon'} /></a>
                            }

                            {project.type === 'web' && 
                                <a href={project.releaseLink} target='_blank' rel='noreferrer'><LaunchIcon className={'featured-project-release-icon'} /></a>
                            }
                    </div>

                </div>
                
            </div>
            


        </div>
    )
}

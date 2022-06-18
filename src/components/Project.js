import React from 'react';

function Project({img,name,id,skills,repo,deployment}) {
    return (
        <div key={id} className='project'>
            <img className='project-img' src={img} alt={name}/>
            <div className='project-body'>
                <h3 className='project-name'>{name}</h3>
                <div className='project-links'>
                    <a title='Repository' href={repo} target='_blank' rel='noreferrer'>Github</a>
                    <a title='Deployment' href={deployment} target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
                <div className='project-skills'>
                    {skills.map(skill => {
                        return <span>{`#${skill} `}</span>
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;
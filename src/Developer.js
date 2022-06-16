import React from 'react'

function Developer({developer,image,handleClick}) {
    return (
        <>
            {developer && <div className='career-card'>
                    <div onClick={handleClick} className='career-developer card'>
                    <img className='card-img' src={image[1]} alt='banker' />
                    <div className='card-body'>
                        <div className='card-info'>
                        <div className='work-info'>
                            <h5 className='work-place'><a href="https://www.linkedin.com/company/beaconapp/" target='_blank'>Beacon</a></h5>
                            <span className='work-title job-title'>Junior Front-end Developer</span>
                            <p className='work-period'>6/2022 - Now</p>
                            <p className='work-description'>
                            Beacon is making it incredibly easy to plan your next social event while 
                            discovering your local social scene. Throw the best parties and find the 
                            coolest events for you and your friends!
                            </p>
                        </div>
                        <hr/>
                        <div className='work-info'>
                            <h5 className='work-place'><a href="https://startupbrite.com/john-hall-atomic/" target='_blank'>Atomic</a></h5>
                            <span className='work-title job-title'>Front-end intern</span>
                            <p className='work-period'>3/2022 - 6/2022</p>
                            <p className='work-description'>
                                Atomic is a SaaS platform that lets developers create software orders
                                of magnitude faster than they can now. 
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <button className='career-shift btn btn-outline-primary' onClick={handleClick}>banker &raquo;</button>
                    </div> }
        </>
    )
}

export default Developer
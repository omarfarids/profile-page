import React from 'react';

function Banker({banker,image,handleClick}) {

    return (
        <>
            {banker && <div className='career-card'>
                    <div className='career-banker card'>
                        <img className='card-img' src={image[0]} alt='banker' />
                        <div className='card-body'>
                            <div className='work-experience card-info'>
                                <div className='work-info'>
                                    <h6 className='work-place'>Commercial international bank CIB</h6>
                                    <span className='work-title job-title'>Bank teller</span>
                                    <p className='work-period'>9/2019 - present</p>
                                </div>
                                <hr/>
                                <div>
                                    <h6 className='work-place'>National Bank of Egypt NBE</h6>
                                    <span className='work-title job-title'>Bank teller</span>
                                    <p className='work-period'>3/2019 - 9/2019</p>
                                </div>
                                <hr/>
                                <div>
                                    <h6 className='work-place'>Integrated Group Consultant</h6>
                                    <span className='work-title job-title'>Junior Accountant</span>
                                    <p className='work-period'>12/2018 - 3/2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='career-shift btn btn-outline-primary' onClick={handleClick}>developer &raquo;</button>
                    </div> }
        </>
    )
}

export default Banker
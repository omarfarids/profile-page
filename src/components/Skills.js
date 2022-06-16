import React from 'react'
import img4 from '../assets/img4.jpeg'

function Skills() {
  return (
    <section>
        <div className='skill card'>
            <img className='card-img' src={img4} alt='skills img' />
            <div className=' card-body'>
                <div className='skill-programming'>
                    Programming skills:
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Reactjs</li>
                        <li>Nextjs</li>
                    </ul>
                </div>
                <div className='skill-language'>
                    Languages:
                    <ul>
                        <li>Arabic</li>
                        <li>English</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
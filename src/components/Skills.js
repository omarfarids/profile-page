import React from 'react'
import img4 from '../assets/img4.jpeg'
import { TiTick } from 'react-icons/ti';


function Skills() {
  return (
    <section>
        <div className='skill card'>
            <img className='card-img' src={img4} alt='skills img' />
            <div className=' card-body'>
                <div className='skill-programming'>
                    Programming skills:
                    <ul>
                        <li><TiTick /> Reactjs</li>
                        <li><TiTick /> Nextjs</li>
                        <li><TiTick /> JavaScript</li>
                        <li><TiTick /> TypeScript</li>
                        <li><TiTick /> SASS</li>
                        <li><TiTick /> Bootstrap</li>
                        <li><TiTick /> CSS</li>
                        <li><TiTick /> HTML</li>
                    </ul>
                </div>
                <div className='skill-language'>
                    Languages:
                    <ul>
                        <li><TiTick /> Arabic</li>
                        <li><TiTick /> English</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
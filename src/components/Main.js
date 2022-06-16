import React,{useContext} from 'react';
import Developer from '../Developer';
import Banker from './Banker';
import { AppContext } from './context';
import Skills from './Skills';

function Main({image}) {
  const{banker,developer,handleClick} = useContext(AppContext)

  return (
    <main className='home-page'>
        <h2>About me</h2>
        <Banker banker={banker} image={image} handleClick={handleClick}/>
        <Developer developer={developer} image={image} handleClick={handleClick}/>
        <Skills />
    </main>
  )
}

export default Main
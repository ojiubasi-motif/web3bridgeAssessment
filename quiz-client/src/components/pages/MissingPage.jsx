import React from 'react'
import Notfound from '../../../public/img/notfound.svg'

const MissingPage = () => {
  return (
    <div className='max-h-[90vh] flex justify-center items-center'>
      <img src={Notfound} alt='notfountImg'/>
    </div>
  )
}

export default MissingPage
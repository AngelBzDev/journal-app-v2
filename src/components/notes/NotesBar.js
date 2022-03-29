import React from 'react'

const NotesBar = () => {
  return (
    <div className='flex justify-between px-6 py-4 text-sm font-semibold border-b-2 bg-primaryTransparent rounded-t-2xl'>
      <p>01/01/2022</p>
      <div className='flex'>
        <button className='mr-6 font-semibold hover:text-strongGreen'>Imagen</button>
        <button className='font-semibold hover:text-strongGreen'>Guardar</button>
      </div>
    </div>
  )
}

export default NotesBar
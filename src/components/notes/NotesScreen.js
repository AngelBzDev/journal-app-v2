import React from 'react'
import Input from '../ui/Input'

const NotesScreen = () => {
  return (
    <div>
      <div className='flex flex-col p-8'>
        <Input name={'title'} />
        <div>
          <Input name={'body'} type="textarea"/>
        </div>
      </div>
    </div>
  )
}

export default NotesScreen
import React from 'react'
import Input from '../ui/Input'
import NotesBar from './NotesBar'

const NotesScreen = () => {
  return (
    <div>
      <NotesBar />
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
import React from 'react'

const JournalEntry = () => {

  const imgUrl = 'https://play-lh.googleusercontent.com/40I0MAr1getFF-dLOzxekLi2_C3MC_u0HL2gmqNbXNWy32n9Bo3XIz2YYlAutfCT8aw'

  return (
    <div className='flex items-center justify-between p-3 mb-6 transition-all duration-300 border cursor-pointer bg-primaryTransparent border-primary rounded-2xl hover:bg-gray-100 hover:border-strongGreen'>
      <img src={imgUrl} alt="Imagen" style={{width: '60px', height: '60px'}} className="rounded-2xl" />
      <div className='ml-4'>
        <h4 className='text-lg font-bold text-primary'>Esta es una nota</h4>
        <p className='mt-2 font-medium'>fsdfkldf hidsfs idsf so fsdfi sdofdif cidgosf</p>
        <p className='mt-2 text-sm font-bold text-right text-strongGreen'>01/01/2022</p>
      </div>
    </div>
  )
}

export default JournalEntry
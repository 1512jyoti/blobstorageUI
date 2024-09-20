import React from 'react'

function NoPage() {
  return (
    <div className='fixed inset-0 flex flex-col h-screen bg-pink-100 justify-center  items-center  ' >
      <h1 className=' text-3xl font-bold underline ' >No page Found </h1>
      <p className='mt-10' > Enter correct url</p>
    </div>
  )
}

export default NoPage

import { useState } from 'react'
// import './App.css'
import AdSection from './components/AdSection'

function App() {

  return (
    <>
      <div className='flex flex-col items-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-screen-xl mx-auto p-5'>
      <section className='p-2 font-jakarta w-full'>
        <AdSection/>
      </section>
      </div>
    </>
  )
}

export default App

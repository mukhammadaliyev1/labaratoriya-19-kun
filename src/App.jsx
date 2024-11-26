import React from 'react'
import Chart from './components/Chart'
import Main from './components/Main'
import Header from './components/Header'
import Section from './components/Section'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
<div className='w-[900px]'>

      <Chart />
</div>

      <Section/>
    </div>
  )
}

export default App

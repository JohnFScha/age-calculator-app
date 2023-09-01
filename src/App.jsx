import React from 'react';
import DateContainer from './components/DateContainer';
import AgeSelector from './components/AgeSelector';

function App() {
  
  return (
    <main className='flex flex-col justify-start p-10 shadow-xl mobile:py-14 mobile:px-5'>
      <AgeSelector />
      <DateContainer />
    </main>
  )
}

export default App

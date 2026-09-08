import { Suspense } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner'
import Players from './Component/Players'

const playersPromise = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading......</p>}>
        <Players playersPromise={playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App

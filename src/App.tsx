import { Suspense, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner'
import Players from './Component/Players'

const playersPromise = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [coin, setCoin] = useState(50000)

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading......</p>}>
        <Players coin={coin} setCoin={setCoin} playersPromise={playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App

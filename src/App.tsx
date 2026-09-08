import { Suspense, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner'
import Players from './Component/Players'

const playersFetch = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [playersPromise] = useState(()=> playersFetch())
  const [coin, setCoin] = useState(50000)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div data-theme={theme} className="app-shell min-h-screen">
      <Navbar coin={coin} theme={theme} setTheme={setTheme}></Navbar>
      <Banner coin={coin} setCoin={setCoin}></Banner>
      <Suspense fallback={<p>Loading......</p>}>
        <Players coin={coin} setCoin={setCoin} playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  )
}

export default App

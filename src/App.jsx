import { LogoReact } from 'react-ionicons'
import { LogoIonic } from 'react-ionicons'

import './App.css'

function App() {

  return (
    <div className='app h-full w-full flex items-center justify-center'>
      <LogoReact
        color={'#00000'}
        rotate
        height="50px"
        width="50px"
        onClick={() => alert('Hi, This is React!')}
      />  +  <LogoIonic
        color={'#00000'}
        rotate
        height="50px"
        width="50px"
        onClick={() => alert('Hi, This is Ionic!')} 
      /> + Tailwind Template By HackNetAyush
    </div>
  )
}

export default App

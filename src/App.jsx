import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'></div>
      <div  className='col-span-4 p-10'>
        <div className="container h-120"></div>
        <div className='bg-zinc-800 w-1/2 text-white m-auto rounded-4xl p-1 pr-5 border-zinc-700 border flex h-16'>
          <input type='text' className='w-full h-full p-3 outline-none' placeholder='Ask me anything'/>
          <button>Ask</button>
        </div>
      </div>
    </div>
  )
}

export default App

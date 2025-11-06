import { useState } from 'react'
import { Menu, jsLogo } from '../constants'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='mx-auto ng-red-500 flex justify-between px-5 bg-neutral-200 relative top-0 sticky items-center'>
      <div className='flex items-center gap-3'>
        <img src={jsLogo} className='w-6 h-auto py-2' />
        <p>JsLearner</p>
      </div>
      <ul className='flex gap-5 hidden md:flex'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div 
        onClick={()=>(
          setMenuOpen(!menuOpen)
        )}
        className='md:hidden relative'>
        <Menu />
        { menuOpen && (
        <ul className='absolute bg-neutral-300 p-5 top-10 fixed right-0 z-20 w-full'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar

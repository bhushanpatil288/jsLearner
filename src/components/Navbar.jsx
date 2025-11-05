import { useState } from 'react'
import { Menu } from '../constants'
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='mx-auto ng-red-500 flex justify-between px-5 bg-neutral-200 py-4 relative top-0 sticky'>
      <div>Logo</div>
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
        <ul className='absolute bg-neutral-300 p-5 top-14 fixed right-0 z-20 w-full'>
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

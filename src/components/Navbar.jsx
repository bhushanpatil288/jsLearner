const Navbar = () => {
  return (
    <div className='container mx-auto border ng-red-500 flex justify-between px-5 bg-neutral-200 py-4 rounded-b-lg relative top-0 sticky'>
      <div>Logo</div>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar

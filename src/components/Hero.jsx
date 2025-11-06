import {jsLogo} from '../constants'

const Hero = () => {
  return (
    <section className={`pt-10`}>
      <div className='container mx-auto px-10 flex flex-col md:flex-row items-center justify-between bg-neutral-100 py-5 shadow-md rounded-lg'>
        <div className='p-5 flex flex-col justify-center gap-4'>
          <h1 className='text-2xl md:text-4xl lg:text-7xl text-center md:text-start'>JavaScript Guide</h1>
          <p className='text-neutral-500 lg:text-2xl text-center md:text-start'>Use this site to supplement knowledge for interviews</p>
        </div>
        <div className='p-5'>
          <img src={jsLogo} className='w-100 h-auto' />
        </div>
      </div>
    </section>
  )
}

export default Hero

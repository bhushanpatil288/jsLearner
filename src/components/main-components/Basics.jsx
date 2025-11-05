import { basics } from '../../constants'
import { Modal } from '../../components'

const Basics = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mb-10 text-xl md:text-2xl lg:text-4xl'>Basics</h2>
      <div className='flex gap-3 flex-wrap w-full justify-center'>
        {basics.map((e, idx)=>(
          <div key={idx} className='w-full sm:w-3/6 md:w-2/6 lg:w-1/6 shadow-md'>
            <Modal id={idx} image={e.image} name={e.name} title={e.title} description={e.description} codeSnippet={e.codeSnippet} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Basics

import { Modal } from '..'

const SectionGenerator = ({sectionName, data}) => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mb-10 text-xl md:text-2xl lg:text-4xl'>{sectionName}</h2>
      <div className='flex gap-3 flex-wrap w-full justify-center'>
        {data.map((e, idx)=>(
          <div key={idx} className='w-full sm:w-3/6 md:w-2/6 lg:w-1/6'>
            <Modal id={e.id} image={e.image} name={e.name} title={e.title} description={e.description} codeSnippet={e.codeSnippet} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionGenerator

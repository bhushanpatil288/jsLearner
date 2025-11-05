import { Modal } from './'
const Main = () => {
  return (
    <section className='pt-10'>
      <div className='container mx-auto px-5 bg-neutral-20 flex gap-3'>
        <Modal id={0} name="Open 1" title="this is 1" description="Test description 1"/>
        <Modal id={1} name="Open 2" title="this is 2" description="Test description 2"/>
      </div>
    </section>
  )
}

export default Main

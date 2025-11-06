import { basics, conditions, functions } from '../constants'
import {SectionGenerator} from './main-components/'

const Main = () => {
  return (
    <section className='pt-10'>
      <div className='container mx-auto px-5 bg-neutral-20 flex gap-15 flex-col py-10'>

       <SectionGenerator sectionName="Basics"  data={basics}/>

       <SectionGenerator sectionName="Conditions" data={conditions}/>
       
       <SectionGenerator sectionName="Functions" data={functions}/>

      </div>
    </section>
  )
}

export default Main

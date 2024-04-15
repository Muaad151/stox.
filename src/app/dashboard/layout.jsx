import React from 'react'
import Form from '../components/Form'

const layout = ({
  children,
  form,
  graph, 
  table,
  search,
}) => {
  return (
    <div className="w-full border ">
      <div className="max-w-4xl mx-auto grid grid-cols-12 my-2 mt-6 px-6 gap-4">
        <div className="col-start-1 sm:col-span-9 col-end-13">
          {form}
        </div>
        <div className="flex gap-1 justify-evenly flex-col col-end-13 col-start-10">
          <div>
            {graph}
          </div>
          <div>
            {search}
          </div>
        </div>
        <div className='col-start-1 col-end-13'>
          {table}
        </div>

      </div>
       
    </div>
  )
}

export default layout
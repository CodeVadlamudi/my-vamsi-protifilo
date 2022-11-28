import React from 'react'
import EducationDiploma from './EducationDiploma'
import EducationsDegree from './EducationsDegree'
import EducationSSC from './EducationSSC'

function Educations() {
  return (
    <div className="h-screen overflow-hidden flex relative flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-32 uppercase text-2xl tracking-[10px] text-gray-500'>Educations</h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory snap-x mt-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]">
          <EducationsDegree />
          <EducationDiploma />
          <EducationSSC />
        </div>
    </div>
  )
}

export default Educations
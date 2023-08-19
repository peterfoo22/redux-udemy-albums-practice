import React from 'react'
import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import Button from './Button'

const ExpandablePanel = ({header,children}) => {
  
  const [expanded, setExpanded] = useState(false);
  
  const handleClick =()=>{
    setExpanded(!expanded);
  }
  
  return (
    <div className='mb-2 border rounded' >
      <div className='flex p-2 justify-between items-center'>
        <div className='flex flex-row items-center justify-between items-center '>
          {header}
        </div>
        <div className='cursor-pointer' onClick={handleClick}>
          {expanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </div>
      </div>

      {
        expanded &&  <div className="bg-gray-100 p-2 border-t">{children}</div>    
      }
    
    </div>


        
  )
}

export default ExpandablePanel
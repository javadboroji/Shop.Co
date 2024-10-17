import React from 'react'
interface MainComponentWrapProps {
    children:React.ReactNode;
  }
const MainComponentWrap:React.FC<MainComponentWrapProps>=({children})=> {
  return (
    <div className='lg:min-h-[35rem] lg:mt-28'>
        {children}
    </div>
  )
}

export default MainComponentWrap
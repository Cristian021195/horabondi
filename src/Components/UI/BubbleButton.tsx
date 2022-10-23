import React from 'react'

export const BubbleButton = () => {
    //className={menuToggle ? `z-i-8 bubble d-sm-none rotate-right` : `z-i-8 bubble d-sm-none rotate-left`} onClick={()=>setMenuToggle(!menuToggle)}
  return (
    <button type='button' className='z-i-8 bubble d-sm-none rotate-right bg-yellow-6'>
        <span className='v-align-middle'>←</span>
    </button>
  )
}

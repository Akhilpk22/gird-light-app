import React from 'react'

function Cells({filled, onClick,isDisabled}) {
  return (
    <>
      <button
      type='button'
      isDisabled={isDisabled}
      onClick={onClick}
      className={filled?"cell cell-activated":"cell"}
      />

      
    </>
  )   
}

export default Cells
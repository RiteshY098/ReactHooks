import React, { useContext, useState } from 'react'
import { TiffinContext } from './tiffin'

function Bag() {
  const tiffin = useContext(TiffinContext);

  return (
    <div>Bag
      Tiffin is {tiffin}
    </div>
  )
}

export default Bag
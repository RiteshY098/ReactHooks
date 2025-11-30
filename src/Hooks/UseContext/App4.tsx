import React, { useContext } from 'react'
import College from './College'
import { TiffinContext } from './tiffin'

function App4() {

  const tiffin = useContext(TiffinContext);
  return (
    <div>
      <TiffinContext.Provider value={tiffin}>
        <College />
      </TiffinContext.Provider>
      
    </div>
  )
}

export default App4
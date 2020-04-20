import React, { useState } from 'react'
import useCoronavirus from 'coronavirus-hooks'

const Death = () => {
  useCoronavirus()
  return null
}

export default function App() {
  const [coronavirus, setCoronavirus] = useState(false)

  return (
    <div>
      <button onClick={() => setCoronavirus(d => !d)} title="are you sure?">
        let there be {coronavirus ? 'life' : 'death'}
      </button>
      {coronavirus && <Death />}
    </div>
  )
}

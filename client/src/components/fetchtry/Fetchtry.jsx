import React from 'react'
import useFetch from '../../Hooks/useFetch'
const Fetchtry = () => {
    const {data ,loading , error} = useFetch(`/subcategories?/`) 


console.log("fetchtry", data)
  return (
    <div>
fetch
        
    </div>
  )
}

export default Fetchtry
import React from 'react';
import Post from './Post'

export default function Crew(props)
{
  console.log(props.data)
  // console.log(props.data.results)
  return (
    < div >
     {
      // <Post name={name} height={height} mass={mass} />
     console.log(props.data.name)
     }
    </div >
  )
}


import React, {useState} from 'react';
import Post from './Post'

export default function Crew(props)
{

  const [person] = useState(props.data)
  console.log("Logging props and data")
  console.log(props.data)
  console.log("Logging person")
  console.log(person)
  // console.log(props.data.results)
  return (
    < div >
     {
      // <Post name={name} height={height} mass={mass} />
    //  props.data.map();
    //   console.log(props.data.name)
    props.data.map(e=>(
      <Post char={e}/>
    ))


       
     }
    </div >
  )
}


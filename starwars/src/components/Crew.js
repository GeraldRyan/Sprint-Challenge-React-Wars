import React, { useState, useEffect } from 'react';
import axios from 'axios'


export default function Crew(props)
{
  console.log(props.data.results)
  return (
    < div > {props.data}</div >
  )
}


import React from 'react';
import { Card, Button, CardImg, CardSubtitle, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import './Post.css'

export default function Post(e)
{
  let gender = ''
if (e.char.gender ==="n/a"){
  gender = "droid"
  console.log(e)
}
else {gender = e.char.gender}
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src={e.char.url} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{e.char.name}</CardTitle>
          <CardSubtitle>{gender}</CardSubtitle>
          <CardText>{`Height: ${e.char.height} `}
        {`Mass: ${e.char.mass} `}</CardText>
        </CardBody>
      </Card>
        {/* {`Name: ${e.char.name} `}
        {`Height: ${e.char.height} `}
        {`Mass: ${e.char.mass} `} */}
 
      {/* {`Name: ${e.char.name} `}
      {`Name: ${e.char.name} `}
      {`Name: ${e.char.name} `}
      {`Name: ${e.char.name} `} */





      }
    </div>
  )

}
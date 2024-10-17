import React from 'react'

const Message = (props) => {
  return (
   <tr>
    <td>{props.firstName}</td>
    <td>{props.surname}</td>
    <td>{props.email}</td>
    <td>{props.message}</td>
   </tr>
  )
}

export default Message


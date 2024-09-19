import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {UserLink} = useParams();
  return (
    <div>User: {UserLink} </div>
  )
}

export default User
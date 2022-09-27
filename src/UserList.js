import React from 'react'
import User from './User'

const UserList=({data})=> {
  
    return (
      <div>{data.map((el, i) => (
        <User user={el} key={i} />
      ))}</div>
    )
}

export default UserList
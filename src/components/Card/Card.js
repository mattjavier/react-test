import React from 'react'

let person = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  address: '123 Main St'
}

const Card = () => {
  return (
    <div className="card" id="card">
      <div className="card-body">
        <h5 className="card-title text-dark" id="name">{person.name}</h5>
        <p className="card-text text-secondary" id="email">Email: {person.email}</p>
        <p className="card-text" id="address">Address: {person.address}</p>
      </div>
    </div>
  )
}

export default Card
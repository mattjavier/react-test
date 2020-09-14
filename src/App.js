import React from 'react'
import Form from './components/Form'
import Card from './components/Card'
import './App.css'

// const styles = {
//   heading: {
//     color: 'red'
//   }
// }

const App = () => {
  return (
    <>
      {/* <h1 style={styles.heading}>Hello World!</h1> */}
      <h1 id="heading">Hello World!</h1>

      <Form />
      <Card />
    </>
  )
}

export default App

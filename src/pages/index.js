import * as React from "react"
import { Link, navigate } from "gatsby"
import Header from '../components/Header'
const Home = () => {
  return (
    <div>
      <Header title="Home Page Title"/>
      Hello World
      <br />
      <br />
      <Link to="/about">About</Link>
      <br />
      <br />
      <button onClick={()=>{
        navigate('/about')
      }}>About page with button</button>
    </div>
  )
}

export default Home

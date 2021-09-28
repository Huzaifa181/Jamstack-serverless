import * as React from "react"
import { Link, navigate } from "gatsby"
const Home = () => {
  return (
    <div>Hello World
      <Link to="/about">About</Link>
      <button onClick={()=>{
        navigate('/about')
      }}>About page with button</button>
    </div>
  )
}

export default Home

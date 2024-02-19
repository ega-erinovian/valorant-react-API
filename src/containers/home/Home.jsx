import React from 'react'
import './home.css'
import { AgentsSelect, Hero } from '../../components'

const Home = () => {
  const agentImg = "https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
  const bgImg = "https://playvalorant.com/assets/images/agents-background.jpg"
  
  return (
    <>
      <section className="home">
        <Hero bgImg={bgImg} img={agentImg} page={"home"}/>
      </section>
      <div className="wrapper">
        <AgentsSelect />
      </div>
    </>
  )
}

export default Home
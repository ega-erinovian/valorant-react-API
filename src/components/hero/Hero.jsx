import React from 'react'

import "./hero.css";

const Hero = ({bgImg, img, page, agentName, agentBio, roleIcon, agentRole, agentBg, agentColors}) => {
  return (
    <section className='hero-section'>
            {page === 'home' ? (
                <div className="hero-content" style={{backgroundImage: `url(${bgImg})`}}>
                    <div></div>
                    <div className="header-info" id="Info">
                    <p>// CHECK THE HEADCOUNT</p>
                    <p>Find more ways to plant the Spike and style on your enemies with scrappers, strategists, and hunters of every description.</p>
                    </div>
                </div>) : (
                 <div className="hero-content agent-page" style={{backgroundImage: `linear-gradient(120deg , #${agentColors[1]}, #${agentColors[3]}, #${agentColors[2]})`}}>
                    <div className="agent-bg-wrapper" style={{backgroundImage: `url(${agentBg})`}}></div>
                    <div className="agent-info" id="Info">
                        <h1 style={{textTransform: 'uppercase'}}>{agentName}</h1>
                        <p className='subtitle'>// Biography</p>
                        <p>{agentBio}</p>
                        <p className='subtitle'>// Role</p>
                        <div className="role-wrapper">
                          <img loading='lazy' className='role-icon' src={roleIcon} alt="role-icon" />
                          <h1 style={{textTransform: 'uppercase'}}>{agentRole}</h1>
                        </div>
                    </div>
                 </div>   
                )
            }
        <div className="img-container" style={{top: `${page === "home" ? 8 + "rem" : 4.5 + "rem"}`}}>
            <img src={img} alt="agents" id='agentArt'/>
        </div>
    </section>
  )
}

export default Hero
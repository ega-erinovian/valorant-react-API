import React from 'react'
import "./header.css";

const Header = ({bgImg, img, page, agentName, agentBio, roleIcon, agentRole, agentBg, agentColors}) => {
  return (
    <div className={`header-wrapper ${page === 'agent' && 'agent-page'}`} style={{backgroundImage: `${page === 'agent' ? `linear-gradient(120deg , #${agentColors[1]}, #${agentColors[3]}, #${agentColors[2]})` : `url(${bgImg})`}`}}>
      <header>
        <img loading='lazy' src={img} alt="Agents" id="agentArt" style={{marginTop: (page === "home" ? 20 : 12) + "rem"}}/>
            {page === "home" ? (
                <div className="header-content">
                    <div></div>
                    <div className="header-info" id="Info">
                      <p>// CHECK THE HEADCOUNT</p>
                      <p>Find more ways to plant the Spike and style on your enemies with scrappers, strategists, and hunters of every description.</p>
                    </div>
                </div>) : (
                <div className="header-content" id="headerContent">
                    <div className="agent-bg-wrapper" style={{backgroundImage: `url(${agentBg})`}}>
                        {/* <img className='agent-bg' src={agentBg} alt="role-icon" /> */}
                    </div>
                    <div className="agent-info" id="Info">
                        <h1 style={{textTransform: 'uppercase'}}>{agentName}</h1>
                        <p>// Biography</p>
                        <p>{agentBio}</p>
                        <p>// Role</p>
                        <div className="role-wrapper">
                          <img loading='lazy' className='role-icon' src={roleIcon} alt="role-icon" />
                          <h1 style={{textTransform: 'uppercase'}}>{agentRole}</h1>
                        </div>
                    </div>
                </div>)
            }
      </header>
    </div>
  )
}

export default Header
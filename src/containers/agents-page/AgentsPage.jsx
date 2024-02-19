import React, {useState, useEffect} from 'react'

import { getAgentsList } from '../../api'
import { AgentsSelect, Hero } from '../../components'

// Import agents data
import { agentsSkillData } from "./skillVid.js";

import "./agentsPage.css";

const AgentsPage = () => {
    const [agents, setAgents] = useState([])
    const [skillIndex, setSkillIndex] = useState(0)
    const [videoLink, setVideoLink] = useState("")

    const bgImg = "https://wallpapercave.com/wp/wp6656047.png"
    let currentURL = window.location.href.split("/");

    let agentIndex = agents
      .map((agent) => {
        return agent.uuid;
      }).indexOf(currentURL[4]);

    useEffect(() => {
      getAgentsList().then((data) => {
        setAgents(data)
      })
    }, [])


    if(agents[agentIndex]){
      return (
        <section className="agent-page">
          <Hero 
            bgImg={bgImg}
            page="agent"
            img={agents[agentIndex].fullPortrait}
            agentName={agents[agentIndex].displayName}
            agentBio={agents[agentIndex].description}
            roleIcon={agents[agentIndex].role.displayIcon}
            agentRole={agents[agentIndex].role.displayName}
            agentBg={agents[agentIndex].background}
            agentColors={agents[agentIndex].backgroundGradientColors}/>
          <div className="agent-skill">
            <h1 className='agent-skill-title'>AGENT ABILITIES</h1>
            <div className="agent-skill-wrapper">
              <div className="agent-skill-detail">
                <div className="agent-skill-icons">
                  {agents[agentIndex].abilities && agents[agentIndex].abilities.map((skill, i) => 
                    <img loading='lazy' className={`agent-skill-icon ${agents[agentIndex].abilities[skillIndex].displayName === skill.displayName ? 'selected' : ''}`}  src={skill.displayIcon} alt={skill.displayIcon} key={i} onClick={() => {setSkillIndex(i); setVideoLink(agentsSkillData[agentIndex].skills[i].link)}} />)
                  }
                </div>
                <p className='agent-skill-name'>{agents[agentIndex].abilities[skillIndex].displayName}</p>
                <p className="agent-skill-desc">
                  {agents[agentIndex].abilities[skillIndex].description}
                </p>
              </div>
              <div className="agent-skill-video">
                <video preload="true" loading='lazy' muted loop autoPlay className="agent-skill-vid" useref='video' src={videoLink === "" ? agentsSkillData[agentIndex].skills[skillIndex].link : videoLink} />
              </div>
            </div>
          </div>
          <AgentsSelect />
        </section>
      )
    }else{
      return (
        <section className="agent-page">
            <h1>Loading...</h1>
        </section>
      )
    }
}

export default AgentsPage
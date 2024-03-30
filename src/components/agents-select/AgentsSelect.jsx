import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { getAgentsList } from "../../api";
import "./agentsSelect.css";

const AgentsSelect = () => {
  const [agents, setAgents] = useState([]);
  let currentURL = window.location.href.split("/");

  useEffect(() => {
    getAgentsList().then((data) => {
      setAgents(data);
    });
  }, []);

  return (
    <section className="select-agents">
      <h1>SELECT AN AGENT</h1>
      <div className="agent-select-wrap">
        {agents &&
          agents.map((agent, i) => {
            if (agent.isPlayableCharacter)
              return (
                <a href={`/agent/${agent.uuid}`} key={i}>
                  <img
                    className={`agent-img${
                      agent.uuid === currentURL[4] ? "-selected" : ""
                    }`}
                    src={agent.displayIcon}
                    alt={agent.displayName}
                    key={i}
                  />
                </a>
              );
          })}
      </div>
    </section>
  );
};

export default AgentsSelect;

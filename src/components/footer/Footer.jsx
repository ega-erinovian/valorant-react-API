import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <>
        <section className="footer">
          <div className="footer-content">
            <h1>VALORANT WEB</h1>
            <p>This provide the information about agents in <a href="https://playvalorant.com/en-gb/" target="_blank" rel="noreferrer"> Valorant </a> games using <a href="https://dash.valorant-api.com/" target="_blank" rel="noreferrer">Valorant API</a> by ... and took the UI reference from playvalorant.com website</p>
          </div>
        </section>
        <div className="copyright">
            <p>Design by Ega-Erinovian</p>
        </div>
    </>
  )
}

export default Footer
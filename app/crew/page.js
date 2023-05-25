'use client'
import styles from '../style.css'
import Image from 'next/image'
import bgdesk from '../assets/crew/background-crew-desktop.jpg'
import bgmed from '../assets/crew/background-crew-tablet.jpg'
import bgmob from '../assets/crew/background-crew-mobile.jpg'
import Layout from '../components/layout.js'

import hurley from '../assets/crew/image-douglas-hurley.webp'
import shuttleworth from '../assets/crew/image-mark-shuttleworth.webp'
import glover from '../assets/crew/image-victor-glover.webp'
import ansari from '../assets/crew/image-anousheh-ansari.webp'

import { useState } from 'react';

export default function Home() {

  const [state, setState] = useState(0);

  function setNewCrew(props){
      setState(state => props);
  }

  return (
    <Layout>
      <div>
        <Image src={bgdesk} fill alt="" className="page-bg dn-mob dn-med" />
        <Image src={bgmed} fill alt="" className="page-bg dn-mob dn-desk" />
        <Image src={bgmob} fill alt="" className="page-bg dn-med dn-desk" />
      </div>
      <div className="flex crew-content crew-mobile">
        <div>
          <div className="flex crew-text-main">
            <h5 className="crew-text-number">02</h5>
            <h5 className="crew-text">MEET YOUR CREW</h5>
          </div>
          <div className="crew-info-mobile">
            <div className={state === 0 ? "crew-active" : "crew-inactive"}>
              <h4 className="crew-role">COMMANDER</h4>
              <h3 className="crew-name">DOUGLAS HURLEY</h3>
              <p className="crew-details">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div className={state === 1 ? "crew-active" : "crew-inactive"}>
              <h4 className="crew-role">MISSION SPECIALIST</h4>
              <h3 className="crew-name">MARK SHUTTLEWORTH</h3>
              <p className="crew-details">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            </div>
            <div className={state === 2 ? "crew-active" : "crew-inactive"}>
              <h4 className="crew-role">PILOT</h4>
              <h3 className="crew-name">VICTOR GLOVER</h3>
              <p className="crew-details">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
            </div>
            <div className={state === 3 ? "crew-active" : "crew-inactive"}>
              <h4 className="crew-role">FLIGHT ENGINEER</h4>
              <h3 className="crew-name">ANOUSHEH ANSARI</h3>
              <p className="crew-details">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
          </div>
          <div className="flex crew-menu">
            <button onClick={() => setNewCrew(0)} className={state === 0 ? "crew-menu-active" : ""}></button>
            <button onClick={() => setNewCrew(1)} className={state === 1 ? "crew-menu-active" : ""}></button>
            <button onClick={() => setNewCrew(2)} className={state === 2 ? "crew-menu-active" : ""}></button>
            <button onClick={() => setNewCrew(3)} className={state === 3 ? "crew-menu-active" : ""}></button>
          </div>
        </div>
        <div className="crew-mobile-image">
          <Image src={hurley} alt="" className={state === 0 ? "crew-active crew-image crew-image-1" : "crew-inactive"} />
          <Image src={shuttleworth} alt="" className={state === 1 ? "crew-active crew-image crew-image-2" : "crew-inactive"} />
          <Image src={glover} alt="" className={state === 2 ? "crew-active crew-image crew-image-3" : "crew-inactive"} />
          <Image src={ansari} alt="" className={state === 3 ? "crew-active crew-image crew-image-4" : "crew-inactive"} />
        </div>
      </div>

    </Layout>
  )
}

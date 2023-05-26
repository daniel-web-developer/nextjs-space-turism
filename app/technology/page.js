'use client'
import styles from '../style.css'
import Image from 'next/image'
import bgdesk from '../assets/technology/background-technology-desktop.jpg'
import bgmed from '../assets/technology/background-technology-tablet.jpg'
import bgmob from '../assets/technology/background-technology-mobile.jpg'
import Layout from '../components/layout.js'

import launchlandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchportrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import capsulelandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import capsuleportrait from '../assets/technology/image-space-capsule-portrait.jpg'
import spacelandscape from '../assets/technology/image-spaceport-landscape.jpg'
import spaceportrait from '../assets/technology/image-spaceport-portrait.jpg'
import { useState } from 'react'

export default function Home() {

  const [state, setState] = useState(0);

  function setNewTech(props){
    setState(state => props);
  }

  return (
    <Layout>
      <div>
        <Image src={bgdesk} fill alt="" className="page-bg dn-mob dn-med" />
        <Image src={bgmed} fill alt="" className="page-bg dn-mob dn-desk" />
        <Image src={bgmob} fill alt="" className="page-bg dn-med dn-desk" />
      </div>
      <div className="tech-content">
        <div className="flex tech-text-main">
          <h5 className="tech-text-number">03</h5>
          <h5 className="tech-text">SPACE LAUNCH 101</h5>
        </div>
        <div className="flex flex-alignit-c tech-mobile-order tech-sb">
          <div className="flex tech-mobile-col">
            <div className="flex flex-dir-col tech-menu tech-mobile-row">
              <button onClick={() => setNewTech(0)} className={state === 0 ? "tech-menu-button tech-menu-button-active" : "tech-menu-button"}><p>1</p></button>
              <button onClick={() => setNewTech(1)} className={state === 1 ? "tech-menu-button tech-menu-button-active" : "tech-menu-button"}><p>2</p></button>
              <button onClick={() => setNewTech(2)} className={state === 2 ? "tech-menu-button tech-menu-button-active" : "tech-menu-button"}><p>3</p></button>
            </div>
            <div class="tech-info">
              <p className="nav-text">THE TERMINOLOGY…</p>
              <div className={state === 0 ? "tech-active" : "tech-inactive"}>
                <h3>LAUNCH VEHICLE</h3>
                <p className="tech-info-main">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
              </div>
              <div className={state === 1 ? "tech-active" : "tech-inactive"}>
                <h3>SPACEPORT</h3>
                <p className="tech-info-main">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
              </div>
              <div className={state === 2 ? "tech-active" : "tech-inactive"}>
                <h3>SPACE CAPSULE</h3>
                <p className="tech-info-main">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
              </div>
            </div>
          </div>
          <Image src={launchportrait} className={state === 0 ? "tech-image dn-mob dn-med" : "tech-inactive"}/>
          <Image src={spaceportrait} className={state === 1 ? "tech-image dn-mob dn-med" : "tech-inactive"}/>
          <Image src={capsuleportrait} className={state === 2 ? "tech-image dn-mob dn-med" : "tech-inactive"}/>

          <Image src={launchlandscape} className={state === 0 ? "tech-image dn-desk" : "tech-inactive"}/>
          <Image src={spacelandscape} className={state === 1 ? "tech-image dn-desk" : "tech-inactive"}/>
          <Image src={capsulelandscape} className={state === 2 ? "tech-image dn-desk" : "tech-inactive"}/>
        </div>
      </div>

    </Layout>
  )
}

'use client'
import styles from '../style.css'
import Image from 'next/image'
import bgdesk from '../assets/destination/background-destination-desktop.jpg'
import bgmed from '../assets/destination/background-destination-tablet.jpg'
import bgmob from '../assets/destination/background-destination-mobile.jpg'
import Layout from '../components/layout.js'

import moon from '../assets/destination/image-moon.webp'
import mars from '../assets/destination/image-mars.webp'
import europa from '../assets/destination/image-europa.webp'
import titan from '../assets/destination/image-titan.webp'

import { useState } from 'react';

export default function Destination() {
    
    const menuNormal = "flex nav-text destination-menu-each";
    const menuActive = "flex nav-text destination-menu-each destination-menu-each-active";
    const menuNormalLast = "flex nav-text destination-menu-each destination-menu-each-last";
    const menuActiveLast = "flex nav-text destination-menu-each destination-menu-each-last destination-menu-each-active";

    const imageNormal = "destination-image";
    const imageActive = "destination-image destination-image-active";

    const [state, setState] = useState(0);

    function setNewDestination(props){
        setState(state => props);
    }

  return (
    <Layout>
      <div>
        <Image src={bgdesk} fill alt="" className="page-bg dn-mob dn-med" />
        <Image src={bgmed} fill alt="" className="page-bg dn-mob dn-desk" />
        <Image src={bgmob} fill alt="" className="page-bg dn-med dn-desk" />
      </div>
      <div className="destination-content">
        <div className="flex destination-text-main">
            <h5 className="destination-text-number">01</h5>
            <h5 className="destination-text">PICK YOUR DESTINATION</h5>
        </div>
        <div className="flex destination-content-mobile">
            <Image src={moon} alt="" className={state === 0 ? imageActive : imageNormal} />
            <Image src={mars} alt="" className={state === 1 ? imageActive : imageNormal} />
            <Image src={europa} alt="" className={state === 2 ? imageActive : imageNormal} />
            <Image src={titan} alt="" className={state === 3 ? imageActive : imageNormal} />
            <div className="flex flex-dir-col">
                <ul className="flex destination-menu">
                    <li>
                        <button onClick={() => setNewDestination(0)} className={state === 0 ? menuActive : menuNormal}>MOON</button>
                    </li>
                    <li>
                        <button onClick={() => setNewDestination(1)} className={state === 1 ? menuActive : menuNormal}>MARS</button>
                    </li>
                    <li>
                        <button onClick={() => setNewDestination(2)} className={state === 2 ? menuActive : menuNormal}>EUROPA</button>
                    </li>
                    <li>
                        <button onClick={() => setNewDestination(3)} className={state === 3 ? menuActiveLast : menuNormalLast}>TITAN</button>
                    </li>
                </ul>
                <div className="destination-info">
                    <h2 className={state === 0 ? "destination-info-title-active" : "destination-info-title"}>MOON</h2>
                    <h2 className={state === 1 ? "destination-info-title-active" : "destination-info-title"}>MARS</h2>
                    <h2 className={state === 2 ? "destination-info-title-active" : "destination-info-title"}>EUROPA</h2>
                    <h2 className={state === 3 ? "destination-info-title-active" : "destination-info-title"}>TITAN</h2>
                </div>
            </div>
        </div>
      </div>

    </Layout>
  )
}

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
            <div className="destination-desktop">
                <div className="flex flex-dir-col destination-content-mobile">
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
                        <div className={state === 0 ? "destination-info-main-active" : "destination-info-main"}>
                            <h2>MOON</h2>
                            <p className="destination-info-main-active-text">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                            </p>
                            <div className="flex destination-info-numbers">
                                <div className="destination-info-numbers-block">
                                    <p className="sub-h2 destination-info-numbers-text">AVG. DISTANCE</p>
                                    <p className="sub-h1">384,400 KM</p>
                                </div>
                                <div>
                                    <p className="sub-h2 destination-info-numbers-text">EST. TRAVEL TIME</p>
                                    <p className="sub-h1 destination-info-numbers-block-last">3 DAYS</p>
                                </div>
                            </div>
                        </div>
                        <div className={state === 1 ? "destination-info-main-active" : "destination-info-main"}>
                            <h2>MARS</h2>
                            <p className="destination-info-main-active-text">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                            </p>
                            <div className="flex destination-info-numbers">
                                <div className="destination-info-numbers-block">
                                    <p className="sub-h2 destination-info-numbers-text">AVG. DISTANCE</p>
                                    <p className="sub-h1">225 MIL. KM</p>
                                </div>
                                <div>
                                    <p className="sub-h2 destination-info-numbers-text">EST. TRAVEL TIME</p>
                                    <p className="sub-h1 destination-info-numbers-block-last">9 MONTHS</p>
                                </div>
                            </div>
                        </div>
                        <div className={state === 2 ? "destination-info-main-active" : "destination-info-main"}>
                            <h2>EUROPA</h2>
                            <p className="destination-info-main-active-text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                            </p>
                            <div className="flex destination-info-numbers">
                                <div className="destination-info-numbers-block">
                                    <p className="sub-h2 destination-info-numbers-text">AVG. DISTANCE</p>
                                    <p className="sub-h1">628 MIL. KM</p>
                                </div>
                                <div>
                                    <p className="sub-h2 destination-info-numbers-text">EST. TRAVEL TIME</p>
                                    <p className="sub-h1 destination-info-numbers-block-last">3 YEARS</p>
                                </div>
                            </div>
                        </div>
                        <div className={state === 3 ? "destination-info-main-active" : "destination-info-main"}>
                            <h2>TITAN</h2>
                            <p className="destination-info-main-active-text">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                            </p>
                            <div className="flex destination-info-numbers">
                                <div className="destination-info-numbers-block">
                                    <p className="sub-h2 destination-info-numbers-text">AVG. DISTANCE</p>
                                    <p className="sub-h1">1.6 BIL. KM</p>
                                </div>
                                <div>
                                    <p className="sub-h2 destination-info-numbers-text">EST. TRAVEL TIME</p>
                                    <p className="sub-h1 destination-info-numbers-block-last">7 YEARS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </Layout>
  )
}

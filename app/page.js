'use client'
import styles from './style.css'
import Image from 'next/image'
import bgdesk from './assets/home/background-home-desktop.jpg'
import bgmed from './assets/home/background-home-tablet.jpg'
import bgmob from './assets/home/background-home-mobile.jpg'
import logo from './assets/shared/logo.svg'
import { Button } from './style.js'

export default function Home() {
  return (
    <main>
      <div>
        <Image src={bgdesk} alt="" className="home-bg dn-mob dn-med" />
        <Image src={bgmed} alt="" className="home-bg dn-mob dn-desk" />
        <Image src={bgmob} alt="" className="home-bg dn-med dn-desk" />
      </div>
      <div className="home-content page-padding">
        <header className="flex flex-justcont-sb flex-alignit-c header">
          <Image src={logo} alt="Logo" className="header-logo" />
          <div className="flex flex-alignit-c header-nav-custom dn-mob">
            <ul className="flex header-nav">
              <li><Button className="nav-text header-nav-each header-nav-each-active"><span className="header-nav-link dn-med">00</span> HOME</Button></li>
              <li><button className="nav-text header-nav-each"><span className="header-nav-link dn-med">01</span> DESTINATION</button></li>
              <li><button className="nav-text header-nav-each"><span className="header-nav-link dn-med">02</span> CREW</button></li>
              <li><button className="nav-text header-nav-each header-nav-each-last"><span className="header-nav-link dn-med">03</span> TECHNOLOGY</button></li>
            </ul>
          </div>

        </header>
      </div>

    </main>
  )
}

'use client'
import styles from './style.css'
import Image from 'next/image'
import bgdesk from './assets/home/background-home-desktop.jpg'
import bgmed from './assets/home/background-home-tablet.jpg'
import bgmob from './assets/home/background-home-mobile.jpg'
import logo from './assets/shared/logo.svg'
import { Button } from './style.js'
import { Header } from './components/header.js'
import Layout from './components/layout.js'

export default function Home() {
  return (
    <Layout>
      <div>
        <Image src={bgdesk} fill alt="" className="home-bg dn-mob dn-med" />
        <Image src={bgmed} fill alt="" className="home-bg dn-mob dn-desk" />
        <Image src={bgmob} fill alt="" className="home-bg dn-med dn-desk" />
      </div>
      <div className="flex flex-justcont-sb home-content page-padding">
        <div className="home-text">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <span className="flex flex-justcont-c flex-alignit-c home-circle">
          <h4>EXPLORE</h4>
        </span>
      </div>
    </Layout>
  )
}

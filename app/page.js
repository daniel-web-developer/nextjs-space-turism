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
        <Image src={bgdesk} alt="" className="home-bg dn-mob dn-med" />
        <Image src={bgmed} alt="" className="home-bg dn-mob dn-desk" />
        <Image src={bgmob} alt="" className="home-bg dn-med dn-desk" />
      </div>
    </Layout>
  )
}

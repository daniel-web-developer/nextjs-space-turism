'use client'
import styles from '../style.css'
import Image from 'next/image'
import bgdesk from '../assets/technology/background-technology-desktop.jpg'
import bgmed from '../assets/technology/background-technology-tablet.jpg'
import bgmob from '../assets/technology/background-technology-mobile.jpg'
import Layout from '../components/layout.js'

export default function Home() {
  return (
    <Layout>
      <div>
        <Image src={bgdesk} fill alt="" className="home-bg dn-mob dn-med" />
        <Image src={bgmed} fill alt="" className="home-bg dn-mob dn-desk" />
        <Image src={bgmob} fill alt="" className="home-bg dn-med dn-desk" />
      </div>

    </Layout>
  )
}

'use client'
import styles from '../style.css'
import Image from 'next/image'
import bgdesk from '../assets/crew/background-crew-desktop.jpg'
import bgmed from '../assets/crew/background-crew-tablet.jpg'
import bgmob from '../assets/crew/background-crew-mobile.jpg'
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

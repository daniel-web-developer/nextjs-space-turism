import styles from './style.css'
import Image from 'next/image'
import bgdesk from './assets/home/background-home-desktop.jpg'
import bgmed from './assets/home/background-home-tablet.jpg'
import bgmob from './assets/home/background-home-mobile.jpg'


export default function Home() {
  return (
    <main>
      <div>
        <Image src={bgdesk} alt="" className="home-bg dn-mob dn-med" />
        <Image src={bgmed} alt="" className="home-bg dn-mob dn-desk" />
        <Image src={bgmob} alt="" className="home-bg dn-med dn-desk" />
      </div>
      <div className="home-content">
        <header>
          
        </header>
      </div>

    </main>
  )
}

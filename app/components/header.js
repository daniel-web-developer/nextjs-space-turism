import styles from '../style.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/shared/logo.svg'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header(){

    const withoutActive = "nav-text header-nav-each";
    const withActive = "nav-text header-nav-each header-nav-each-active";
    const withoutActiveLast = "nav-text header-nav-each";
    const withActiveLast = "nav-text header-nav-each header-nav-each-last header-nav-each-active";
    const withoutActiveFirst = "nav-text header-nav-each";
    const withActiveFirst = "nav-text header-nav-each header-nav-each-first header-nav-each-active";

    const [state, setState] = useState(false);

    function toggleMenu(){
        setState(state => !state);
    }

    return(
        <div className="header-content page-padding">
            <header className="flex flex-justcont-sb flex-alignit-c flex-alignit-c header">
                <Link href="/" className="header-logo"><Image src={logo} alt="Logo" className="header-logo" /></Link>
                <div className="flex flex-alignit-c header-nav-custom dn-mob">
                    <ul className="flex header-nav">
                        <li>
                            <Link href="/"><button className={usePathname() == "/" ? withActive : withoutActive}><span className="header-nav-link dn-med">00</span> HOME</button></Link>
                        </li>
                        <li>
                            <Link href="/destination"><button className={usePathname() == "/destination" ? withActive : withoutActive}><span className="header-nav-link dn-med">01</span> DESTINATION</button></Link>
                        </li>
                        <li>
                            <Link href="/crew"><button className={usePathname() == "/crew" ? withActive : withoutActive}><span className="header-nav-link dn-med">02</span> CREW</button></Link>
                        </li>
                        <li>
                            <Link href="/tech"><button className={usePathname() == "/tech" ? withActiveLast : withoutActiveLast}><span className="header-nav-link dn-med">03</span> TECHNOLOGY</button></Link>
                        </li>
                    </ul>
                </div>

                <div className="dn-desk dn-med">
                    <button onClick={toggleMenu} className={state === false ? "flex flex-dir-col header header-menu" : "flex flex-dir-col header header-menu open"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div>
                        <span className={state === false ? "header-overlay" : "header-overlay header-overlay-active"}>
                            <ul className="flex flex-dir-col">
                                <li>
                                    <Link href="/"><button className={usePathname() == "/" ? withActiveFirst : withoutActiveFirst}><span className="header-nav-link dn-med">00</span> HOME</button></Link>
                                </li>
                                <li>
                                    <Link href="/destination"><button className={usePathname() == "/destination" ? withActive : withoutActive}><span className="header-nav-link dn-med">01</span> DESTINATION</button></Link>
                                </li>
                                <li>
                                    <Link href="/crew"><button className={usePathname() == "/crew" ? withActive : withoutActive}><span className="header-nav-link dn-med">02</span> CREW</button></Link>
                                </li>
                                <li>
                                    <Link href="/tech"><button className={usePathname() == "/tech" ? withActiveLast : withoutActiveLast}><span className="header-nav-link dn-med">03</span> TECHNOLOGY</button></Link>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>

            </header>
        </div>
    )
}
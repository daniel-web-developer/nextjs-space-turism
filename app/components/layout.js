import Navbar from './header.js'

export default function Layout({children}){
    return(
        <div>
            <main>
            <Navbar />
                {children}
            </main>
        </div>
    )
}
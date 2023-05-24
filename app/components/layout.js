import Navbar from './header.js';

export default function Layout({children}){
    return(
        <div>
            <main class="layout">
            <Navbar />
                {children}
            </main>
        </div>
    )
}
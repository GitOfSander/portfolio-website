import React, { useEffect, useState } from 'react';

import styles from '../assets/scss/components/navbar.module.scss';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            setScroll(window.pageYOffset > 50)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <nav className={ styles.navbar + " navbar navbar-expand-lg " + (scroll ? 'dark' : '') }>
            <div className="container-fluid">
                <a className={ styles.logo + " navbar-brand" } href="#">Sander Pals</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className={ styles.link + " nav-link" } aria-current="page" to="/">Home</a>
                        <a className={ styles.link + " nav-link" } aria-current="page" to="/repositories">Repositories</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
  
export default Navbar
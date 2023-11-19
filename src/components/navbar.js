import React, { useEffect, useState } from 'react';
import { Collapse } from 'bootstrap';

import styles from '../assets/scss/components/navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [navbarOpen, setNavbarOpen] = useState(false)
    var [toggle, setToggle] = useState(false)

    const handleToggler = () => {
        setNavbarOpen(navbarOpen != true) 
        setToggle(toggle => !toggle)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

        handleToggler()
    }

    useEffect(() => {
        var bsCollapse = new Collapse(document.getElementById('navbarCollapseTarget'), {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    }, [toggle])

    useEffect(() => {
        const handleScroll = (event) => {
            setScroll(window.pageYOffset > 50)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <nav className={ styles.navbar + " navbar navbar-expand-lg" + (scroll || navbarOpen ? ' dark' : '') }>
            <div className="container-fluid">
                <Link className={ styles.logo + " navbar-brand" } to="/">SanderPals</Link>
                <button onClick={ handleToggler } className={ styles.toggler + " navbar-toggler collapsed" } type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseTarget" aria-controls="navbarCollapseTarget" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={ styles.icon_bar }></span>
                    <span className={ styles.icon_bar }></span>
                    <span className={ styles.icon_bar }></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapseTarget">
                    <div className={ styles.navigation + " navbar-nav ms-auto" }>
                        <NavLink onClick={ scrollToTop } className={ styles.link + " nav-link" } to="/">Home</NavLink>
                        <NavLink onClick={ scrollToTop } className={ styles.link + " nav-link" } to="/repositories">Repositories</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
  
export default Navbar
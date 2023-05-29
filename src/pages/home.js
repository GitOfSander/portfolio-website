import React, { useEffect } from 'react';

import styles from '../assets/scss/pages/home.module.scss';
import Header from '../components/header';
import ProjectsList from '../components/projects-list';

const PAGE_TITLE = "Mijn Portfolio";
const BREADCRUMBS = [{
        "label": "Home",
        "Link": "/"
    }];

function Home() {
    useEffect(() => {
    }, [])

    return(
        <>
            <Header title={ PAGE_TITLE } breadcrumbs={ BREADCRUMBS } />

            <div className={ styles.wrapper + ' container' }>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Portfolio Sander Pals</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <ProjectsList />
            </div>
        </>
    )
}
  
export default Home
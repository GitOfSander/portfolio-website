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

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Portfolio Sander Pals</h1>
                        <p></p>
                    </div>
                </div>

                <ProjectsList />
            </div>
        </>
    )
}
  
export default Home
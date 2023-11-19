import React, { useEffect } from 'react';

import styles from '../assets/scss/pages/home.module.scss';
import Header from '../components/header';
import ProjectsList from '../components/projects-list';

const PAGE_TITLE = "Projecten";
const BREADCRUMBS = [];

function Home() {
    useEffect(() => {
    }, [])

    return(
        <>
            <Header title={ PAGE_TITLE } breadcrumbs={ BREADCRUMBS } />

            <div className={ styles.wrapper + ' container' }>
                <div className='row'>
                    <div className='col-lg-5 col-12'>
                        <h1>Projecten</h1>
                        <p>Hierbij presenteer ik een uitgebreid overzicht van de diverse projecten waaraan ik de afgelopen jaren met toewijding en vakmanschap heb bijgedragen en ontwikkeld.</p>
                    </div>
                </div>

                <ProjectsList />
            </div>
        </>
    )
}
  
export default Home
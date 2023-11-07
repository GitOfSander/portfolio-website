import React, { useEffect, useState } from 'react';

import styles from '../assets/scss/pages/home.module.scss';
import Header from '../components/header';
import GitHub from '../components/github';

const PAGE_TITLE = "Repositories";
const BREADCRUMBS = [{
        "label": "Github",
        "Link": "/"
    }];

function Repositories() {
    useEffect(() => {
    }, [])

    return(
        <>
            <Header title={ PAGE_TITLE } breadcrumbs={ BREADCRUMBS } />

            <div className={ styles.wrapper + ' container' }>
                <div className='row'>
                    <div className='col-12'>
                        <h1>GitHub Repositories</h1>
                        <p></p>
                    </div>
                </div>

                <div className='row'>
                    <GitHub />
                </div>
            </div>
        </>
    )
}
  
export default Repositories
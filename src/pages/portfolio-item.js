import React, { useEffect, useState } from 'react';
import projectService from '../services/project.service'

import styles from '../assets/scss/pages/home.module.scss';
import Header from '../components/header';

function PortfolioItem() {
    const [pageTitle, setPageTitle] = useState()
    const [breadcrumbs, setBreadcrumbs] = useState()
    const [itemData, setItemData] = useState()


    useEffect(() => {
        async function getItem() {
            let response = await projectService.getProject('test')
            
            setItemData(response)
            setPageTitle(response.title)
            setBreadcrumbs([{
                "label": "Home",
                "Link": "/"
            }])
        }
        
        getItem()
    }, [])

    return(
        <>
            <Header title={ pageTitle } breadcrumbs={ breadcrumbs } />

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>

                    </div>
                    <div className='col-lg-offset-1 col-lg-8'>
                        { itemData?.description }
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default PortfolioItem
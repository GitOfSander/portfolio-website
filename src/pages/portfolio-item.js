import React, { useEffect, useRef, useState } from 'react';

import projectService from '../services/project.service';

import styles from '../assets/scss/pages/portfolio-item.module.scss';
import Header from '../components/header';
import Carousel from '../components/carousel';
import { useLocation } from 'react-router-dom';


function PortfolioItem() {
    const location = useLocation()
    const [pageTitle, setPageTitle] = useState()
    const [breadcrumbs, setBreadcrumbs] = useState()
    const [itemData, setItemData] = useState()

    useEffect(() => {
        async function getItem() {
            let response = await projectService.getProject(location.pathname.replace('/', ''))
            
            setItemData(response)
            setPageTitle(response.title)
            setBreadcrumbs([{
                "label": "Home",
                "Link": "/"
            }])
        }
        
        getItem()
    }, [])

    /*useEffect(() => {
        let i = 0
        while(i < itemData?.sliders.length) {
            new Glide('.glide_' + i).mount({ Swipe, Controls })
            i++
        }
    }, [itemData])*/

    function columnClass(slider, section) {
        var classes = []
        var isText = (section == 'text')

        switch(slider.type){
            case 'fullwidth':
                isText ? classes.push('col-lg-6 col-12 mb-3') : classes.push('col-12')
                break;
            case '6/6': 
                isText ? classes.push('col-md-5 mb-md-0 mb-3 align-self-center') : classes.push('col-md-6')
                break;
            case '4/8':
                isText ? classes.push('col-md-4 mb-md-0 mb-3 align-self-center') : classes.push('col-md-4')
                break;
        }

        if (!isText && 
            slider.type != 'fullwidth' &&
            slider.picture_position == 'left') {
                classes.push('order-md-first')
            }

        if (isText &&
            slider.type != 'fullwidth' &&
            slider.picture_position == 'right') {
                slider.type == '6/6' ? classes.push('offset-md-1') : classes.push('offset-md-4')
            }

        return classes.join(' ')
    }

    return(
        <>
            <Header title={ pageTitle } breadcrumbs={ breadcrumbs } />

            <div className={ styles.wrapper + ' container' }>
                <div className='row mb-5'>
                    <div className={ styles.stats + ' col-lg-3 col-md-4 mb-md-0 mb-5' }>
                        { itemData?.client && <div className='row'>
                            <label className='col-4'>Client:</label>
                            <span className='col-8'>{ itemData.client }</span>
                        </div> }
                        { itemData?.skills && <div className='row'>
                            <label className='col-4'>Skills:</label>
                            <span className='col-8'>{ itemData?.skills }</span>
                        </div> }
                        { itemData?.github && <div className='row'>
                            <label className='col-4'>Github:</label>
                            <span className='col-8'>{ itemData?.github }</span>
                        </div> }
                        { itemData?.demo && <div className='row'>
                            <label className='col-4'>Demo:</label>
                            <span className='col-8'>{ itemData?.demo }</span>
                        </div> }
                    </div>
                    <div className='offset-lg-1 col-md-8'>
                        <div className='row'>
                            <div className='col-12'>
                                <p>{ itemData?.description }</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        { itemData?.sliders.map((item, index) => (
                            <div key={ index } className='row mb-5'>
                                <div className={ columnClass(item, 'text') }>
                                    <h2>{ item.title }</h2>
                                    <p>{ item.description }</p>
                                </div>

                                <div className={ columnClass(item, 'picture') }>
                                    <Carousel images={ item.images } />
                                </div>
                             </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default PortfolioItem
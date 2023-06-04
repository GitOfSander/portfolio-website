import React, { useEffect, useRef, useState } from 'react';
import Glide, { Swipe, Controls } from '@glidejs/glide/dist/glide.modular.esm'

import projectService from '../services/project.service';

import styles from '../assets/scss/pages/portfolio-item.module.scss';
import Header from '../components/header';
import Modal from '../components/modal';


function PortfolioItem() {
    const [pageTitle, setPageTitle] = useState()
    const [breadcrumbs, setBreadcrumbs] = useState()
    const [itemData, setItemData] = useState()
    const modalRef = useRef()


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

    useEffect(() => {
        let i = 0
        while(i < itemData?.sliders.length) {
            new Glide('.glide_' + i).mount({ Swipe, Controls })
            i++
        }
    }, [itemData])

    return(
        <>
            <Header title={ pageTitle } breadcrumbs={ breadcrumbs } />

            <div className={ styles.wrapper + ' container' }>
                <div className='row mb-5'>
                    <div className={ styles.stats + ' col-lg-3' }>
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
                    <div className='offset-lg-1 col-lg-8'>
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
                                <div className={ item.type == 'fullwidth' ? 'col-12 mb-3' : (item.type == '6/6' ? 'col-6 align-self-center' : 'col-8 align-self-center') }>
                                    <h2>{ item.title }</h2>
                                    <p>{ item.description }</p>
                                </div>
                                <div className={ item.type == 'fullwidth' ? 'col-12' : (item.type == '6/6' ? 'order-first col-6' : 'order-first col-4') }>
                                    <div className={ styles.slider + ' glide_' + index }>
                                        <div className='glide__track' data-glide-el='track'>
                                            <ul className='glide__slides'>
                                                { item.images.map((item, index) => (
                                                    <li key={ index } className={ styles.slide + ' glide__slide' } onClick={ () => modalRef.current.open({ 'image': item }) }><img src={ item } /></li>
                                                )) }
                                            </ul>
                                        </div>

                                        <div className={ styles.arrows + ' glide__arrows' } data-glide-el='controls'>
                                            <button className={ styles.left + ' glide__arrow glide__arrow--left' } data-glide-dir='<'></button>
                                            <button className={ styles.right + ' glide__arrow glide__arrow--right' } data-glide-dir='>'></button>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        )) }
                    </div>
                </div>
            </div>

            <Modal ref={ modalRef } type='full_picture' />
        </>
    )
}
  
export default PortfolioItem
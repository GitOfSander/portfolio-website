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

    function columnClass(slider, section) {
        var classes = []
        var isText = (section == 'text')

        switch(slider.type){
            case 'fullwidth':
                isText ? classes.push('col-12 mb-3') : classes.push('col-12')
                break;
            case '6/6': 
                isText ? classes.push('col-5 align-self-center') : classes.push('col-6')
                break;
            case '4/8':
                isText ? classes.push('col-4 align-self-center') : classes.push('col-4')
                break;
        }

        if (!isText && 
            slider.type != 'fullwidth' &&
            slider.picture_position == 'left') {
                classes.push('order-lg-first')
            }

        if (isText &&
            slider.type != 'fullwidth' &&
            slider.picture_position == 'right') {
                slider.type == '6/6' ? classes.push('offset-lg-1') : classes.push('offset-lg-4')
            }

        return classes.join(' ')
    }

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
                                <div className={ columnClass(item, 'text') }>
                                    <h2>{ item.title }</h2>
                                    <p>{ item.description }</p>
                                </div>

                                <div className={ columnClass(item, 'picture') }>
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
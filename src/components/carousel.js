import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Glide, { Swipe, Controls, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

import Modal from '../components/modal';

import styles from '../assets/scss/components/carousel.module.scss';

const Carousel = (props) => {
    const ref = useRef()
    const modalRef = useRef()

    useEffect(() => {
        new Glide(ref.current, { autoplay: 5000 }).mount({ Swipe, Controls, Autoplay })
    }, [])

    return(
        <>
            <div className={ styles.slider } ref={ ref }>
                <div className='glide__track' data-glide-el='track'>
                    <ul className={ styles.slides + ' glide__slides' }>
                        { props.images.map((item, index) => (
                            <li key={ index } className={ styles.slide + ' glide__slide' } onClick={ () => modalRef.current.open({ 'image': item }) }><img src={ item } /></li>
                        )) }
                    </ul>
                </div>

                <div className={ styles.arrows + ' glide__arrows' } data-glide-el='controls'>
                    <button className={ styles.left + ' glide__arrow glide__arrow--left' } data-glide-dir='<'></button>
                    <button className={ styles.right + ' glide__arrow glide__arrow--right' } data-glide-dir='>'></button>
                </div>
            </div>

            <Modal ref={ modalRef } type='full_picture' />
        </>
    )
}
  
export default Carousel
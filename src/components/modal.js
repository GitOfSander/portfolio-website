import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal as BootstrapModal } from 'bootstrap';

import styles from '../assets/scss/components/modal.module.scss';

const Modal = forwardRef((props, ref) => {
    const [typeClass, setTypeClass] = useState()
    const [modal, setModal] = useState()
    const [data, setData] = useState()

    const modalRef = useRef()

    useImperativeHandle(ref, () => ({
        open(obj) {
            setData(obj)
 
            setTimeout(modal.show(), 500)
            
        }
    }))

    useEffect(() => {
        setModal(new BootstrapModal(modalRef.current))
    }, [])

    useEffect(() => {
        if (props.type == 'full_picture') {
            var image = modalRef.current.querySelector('img')
            image.src = data?.image
        }

        switch(props.type) {
            case 'full_picture':
                setTypeClass(styles.full_picture_modal)
                break;
            default:
                setTypeClass('')
        }
    }, [data])

    return(
        <>
            <div ref={ modalRef } className={ typeClass + ' modal fade' }>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className={ styles.content + ' modal-content' }>
                        <div className={ styles.header + ' modal-header' }>
                            { props.title && <h5 className='modal-title' id='modalTitle'>{ props.title }</h5> }
                            <button type='button' className='close' data-bs-dismiss='modal'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className={ styles.body + ' modal-body' }>
                            { props.type == 'full_picture' && 
                                <img src='' />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})
  
export default Modal
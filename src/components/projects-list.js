import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from '../assets/scss/components/projects-list.module.scss';
import projectService from '../services/project.service';

const ProjectsList = () => {
    const [items, setItems] = useState([])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        projectService.getProjects().then(
            response => {
                setItems(response)
            },
            error => {
                console.log('could not find the projects!')
            }
        )
    }, [])

    return(
        <>
            { items.map((item, index) => (
                <div key={ index } className={ styles.item }>
                    <Link onClick={ scrollToTop } to={ item.path }>
                        <div className='row'>
                            <div className={ styles.image + ' col-lg-4 col-md-6' }>
                                <LazyLoadImage src={ item.thumbnail } />
                            </div>
                            <div className={ styles.info + ' col-lg-5 col-md-6' + ((index % 2) != 0 ? ' order-lg-first offset-lg-3' : '') }>
                                <h3 className={ styles.title }>{ item.title }</h3>
                                <p className={ styles.description }>{ item.short_description }</p>
                                <span className={ styles.button }>bekijk-project</span>
                            </div>
                        </div>
                    </Link>

                    { items.length != (index + 1) &&
                        <hr />
                    }
                </div>
            )) }
        </>
    )
}
  
export default ProjectsList
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../assets/scss/components/projects-list.module.scss';
import projectService from '../services/project.service';

const ProjectsList = () => {
    const [items, setItems] = useState([])

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
                    { console.log(item) }
                    <Link to={ item.path }>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6'>
                                <img className={ styles.image } src={ item.thumbnail } />
                            </div>
                            <div className={ styles.info + ' col-lg-5 col-md-6' + (index%2!=0 ? ' order-lg-first offset-lg-3' : '') }>
                                <h3 className={ styles.title }>{ item.title }</h3>
                                <p className={ styles.description }>{ item.description }</p>
                                <span className={ styles.button }>BEKIJK PROJECT</span>
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
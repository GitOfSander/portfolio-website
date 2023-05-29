import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../assets/scss/components/projects-list.module.scss';

const ProjectsList = () => {
    const items = [  
        {  
            'title': 'Project 1',   
            'description': 'Voor Project 1 hebben we het ontwerp en front-end mogen ontwikkelen voor hun dienst waarbij bedrijven en gemeentes peilingen kunnen aanmaken om bepaalde voorkeuren vast te stellen.',
            'url': '',
            'imageUrl': '/images/placeholder.png'
        },  
        {  
            'title': 'Project 2',   
            'description': 'Voor Project 2 hebben we het ontwerp en front-end mogen ontwikkelen voor hun dienst waarbij bedrijven en gemeentes peilingen kunnen aanmaken om bepaalde voorkeuren vast te stellen.',
            'url': '',
            'imageUrl': '/images/placeholder.png'
        },   
        {  
            'title': 'Project 3',   
            'description': 'Voor Project 3 hebben we het ontwerp en front-end mogen ontwikkelen voor hun dienst waarbij bedrijven en gemeentes peilingen kunnen aanmaken om bepaalde voorkeuren vast te stellen.',
            'url': '',
            'imageUrl': '/images/placeholder.png'
        },  
    ];

    const amount = items.length

    return(
        <>
            {items.map((item, index) => (
                <div key={ index } className={ styles.item }>
                    <Link to={ styles.url }>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6'>
                                <img className={ styles.image } src={ item.imageUrl } />
                            </div>
                            <div className={ styles.info + ' col-lg-5 col-md-6' + (index%2!=0 ? ' order-lg-first offset-lg-3' : '') }>
                                <h3 className={ styles.title }>{ item.title }</h3>
                                <p className={ styles.description }>{ item.description }</p>
                                <span className={ styles.button }>BEKIJK PROJECT</span>
                            </div>
                        </div>
                    </Link>

                    { amount != (index + 1) &&
                        <hr />
                    }
                </div>
            ))}
        </>
    )
}
  
export default ProjectsList
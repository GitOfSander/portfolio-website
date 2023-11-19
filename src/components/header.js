import React from 'react';

import styles from '../assets/scss/components/header.module.scss';

const Header = (props) => {
    let breadcrumbs = (typeof props.breadcrumbs !== 'undefined' ? props.breadcrumbs : null)
    
    return(
        <div className={ styles.header }>
            <div className="container">
                <div className={ styles.text }>
                    { breadcrumbs && 
                        <div className={ styles.breadcrumbs }>
                            <ul>
                                { breadcrumbs.map((item, index) => (
                                    <li key={ index }><a href={ item.link }>{ item.label }</a></li>
                                ))}
                            </ul>
                        </div>
                    }
                    <h1>{ props.title }</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
import React from 'react';

import styles from '../assets/scss/components/header.module.scss';

const Header = (props) => {
    let breadcrumbs = (typeof props.breadcrumbs !== 'undefined' ? props.breadcrumbs : null)
    
    return(
        <div className={ styles.header }>
            <div className="container">
                <div className={ styles.text }>
                    <h1>{ props.title }</h1>

                    { breadcrumbs &&
                        <div className={ styles.breadcrumbs }>
                            <ul>
                                <li><a href="LINK">Home</a></li>
                                <li>Portfolio item</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
  
export default Header
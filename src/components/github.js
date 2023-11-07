import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import Modal from './modal';

import styles from '../assets/scss/components/github.module.scss';

const GITHUB_USER = "gitofsander";

const GitHub = (props) => {
    const ref = useRef()
    const modalRef = useRef()

    const [gitHubData, setGitHubData] = useState([])

    const fetchData = () => {
        return fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
          .then((response) => response.json())
          .then((data) => setGitHubData(data.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at)).reverse()));
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            { gitHubData.map((item, index) => (
                <div key={ index } className={ styles.item + ' col-md-6' }>
                    <div>
                        <h3><a href={ item.html_url } target="_blank">{ item.name }</a></h3>
                        <p>{ item.description }</p>
                        <span className={ styles.language }>{ item.language }</span>
                    </div>
                </div>
            )) }
        </>
    )
}
  
export default GitHub
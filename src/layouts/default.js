import React, { useEffect }  from 'react';
import { Outlet } from 'react-router';

import styles from '../assets/scss/layouts/default.module.scss';

function DefaultLayout() {
    useEffect(() => {
    }, [])

    return (
        <>
            <h1>Title</h1>
            <Outlet />
        </>
    )
}
  
export default DefaultLayout
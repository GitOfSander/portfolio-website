import React, { useEffect }  from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/navbar';

function DefaultLayout() {
    return (
        <>
            <Navbar />
            
            <Outlet />
        </>
    )
}
  
export default DefaultLayout
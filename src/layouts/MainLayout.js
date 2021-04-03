//Components
import { useState } from 'react';
import Navbar from '../components/Navbar';

//styling
import './style.scss';

function MainLayout (props){

    const [isDark,setDark]= useState('false');

    function modalNotify(){
       setDark(!isDark);
    }
    

    return (
        
        <div className={'mainLayout ' }>
            <Navbar modalNotify={modalNotify} position='absolute' />
            <div className={'mainLayout '+ (isDark ? '': '--dark')}>
            {props.children}
            </div>
        </div>
    )
}

export default MainLayout;

//Components
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

//styling
import './style.scss';

//Context
import {globalContext} from '../../AppContext'

function MainLayout (props){

    const [isDark,setDark]= useState('false');

    function modalNotify(){
       setDark(!isDark);
    }
    

    return (
        
        <div className={'mainLayout ' }>
            <globalContext.Consumer>
                {({handleSignIn, signed, setSigned})=> (
                    <Navbar modalNotify={modalNotify} login={handleSignIn} signed={signed} setSigned= {setSigned} position='absolute' />
                )}
            </globalContext.Consumer>
            <div className={'mainLayout '+ (isDark ? '': '--dark')}>
            {props.children}
            </div>
        </div>
    )
}

export default MainLayout;

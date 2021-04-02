import Navbar from '../components/Navbar';

//styling
import './style.scss';

function MainLayout (props){

    return (
        <div className='mainLayout'>
            <Navbar position='absolute' />
            {props.children}
        </div>
    )
}

export default MainLayout;

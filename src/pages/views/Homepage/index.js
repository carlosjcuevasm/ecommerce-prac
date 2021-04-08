//images
import shopWomen from '../../../assets/shopWomens.jpg';
import shopMen from '../../../assets/shopMens.jpg';
//components
import CategoriesShop from '../../components/CategoriesShop';

//layouts
import MainLayout from '../../layouts/MainLayout';

//styling
import './styles.scss'

function Homepage (props){

    return (
        <div className='homepage'>
            <MainLayout>
            <div className="shopCategories">
            <CategoriesShop categoryPhoto={shopWomen} message={'Shop Women'}/>
            <CategoriesShop categoryPhoto={shopMen} message={'Shop Men'}/>
            </div>
            </MainLayout>
            
        </div>
    )
}

export default Homepage;
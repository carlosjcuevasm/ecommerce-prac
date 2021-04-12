//images
import shopWomen from '../../../assets/shopWomen.jpg';
import shopMen from '../../../assets/shopMen.jpg';
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
            <CategoriesShop categoryPhoto={shopWomen} message={'Shop Women'} route={'shop-women'} />
            <CategoriesShop categoryPhoto={shopMen} message={'Shop Men'} route={'shop-men'} />
            </div>
            </MainLayout>
            
        </div>
    )
}

export default Homepage;
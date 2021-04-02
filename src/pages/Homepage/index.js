//images
import shopWomen from '../../assets/shopWomens.jpg';
import shopMen from '../../assets/shopMens.jpg';
//components
import CategoriesShop from '../../components/CategoriesShop';
//styling
import './styles.scss'

function Homepage (props){

    return (
        <div class='homepage'>
            <div className="shopCategories">
            <CategoriesShop categoryPhoto={shopWomen} message={'Shop Women'}/>
            <CategoriesShop categoryPhoto={shopMen} message={'Shop Men'}/>
            </div>
            
        </div>
    )
}

export default Homepage;
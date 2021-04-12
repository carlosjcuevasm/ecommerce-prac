//imgs
import React from 'react'

//styling
import './styles.scss'

//Routing
import {
    Link
} from 'react-router-dom';



function CategoriesShop(props){

    return (
        <div className='category' style={{backgroundImage:`url(${props.categoryPhoto})`}}>
            <Link className='category__link button' to={`/${props.route}`}> {props.message} </Link> 
        </div>

    )
}

export default CategoriesShop;

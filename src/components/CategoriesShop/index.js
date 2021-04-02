//imgs
import React from 'react'


//styling
import './styles.scss'



function CategoriesShop(props){

    return (
        <div className='category' style={{backgroundImage:`url(${props.categoryPhoto})`}}>
            <a className='category__link'>{props.message}</a>
        </div>
    )
}

export default CategoriesShop;

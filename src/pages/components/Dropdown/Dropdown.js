import {useRef} from 'react';
import './styles.scss'

function Dropdown (props){

    //Mueveme al component dropdown script.js. Mejora el nesting que sea automatico sin tener que codiar el index con clases distintas.

    const dropdownList = useRef(null);

    function mouseOverHandler(){
        const dropdownListNode = dropdownList.current;
        
        dropdownListNode.classList.add('dropdown__list--active')
    }

    function mouseOutHandler(){
        const dropdownListNode = dropdownList.current;
        dropdownListNode.classList.remove('dropdown__list--active');
        
    }


    return (
        <div className="dropdown "  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>Dropdown
            <ul className="dropdown__list" ref={dropdownList} onMouseOut={mouseOutHandler}>
                <li className="dropdown__listItem">
                    <a className="dropdown__listItemLink" href='/#'>Dropdown 1</a>
                </li>
                <li className="dropdown__listItem">
                    <a className="dropdown__listItemLink" href='/#'>Dropdown 2</a>
                </li>
                <li className="dropdown__listItem">
                    <a className="dropdown__listItemLink" href='/#'>Dropdown 3</a>
                </li>
                <li className="dropdown__listItem">
                    <a className="dropdown__listItemLink" href='/#'>Dropdown 4</a>
                </li>
                <li className="dropdown__listItem">
                    <a className="dropdown__listItemLink" href='/#'>Dropdown 5</a>
                </li>
            </ul>
        </div>       
    )
}

export default Dropdown;

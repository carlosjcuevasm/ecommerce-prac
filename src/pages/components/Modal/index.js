import './style.scss'

function Modal (props){

    return (
        <div className={'modal ' + (props.disabled ? '--disabled': null) }>
                Aqui iniciaremos session
        </div>
    )
}

export default Modal;

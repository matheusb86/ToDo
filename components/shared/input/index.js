import { importCss } from "../../../modules/importCss/index.js"
import { Icon } from "../Icon/index.js"

importCss('./components/shared/Input/styles.css')

export const Input = (props) =>{


    const _container = document.createElement('div')
    _container.classList.add('input')
    props?.width && (_Input.style.width = props.width)

    const _Input = document.createElement('input')
    _Input.classList.add('input-field') 
    if(!props.icon) _Input.classList.add('input-field--no-icon')
    props?.placeholder && _Input.setAttribute('placeholder', 'Digite sua pesquisa aqui', props?.placeholder)

    const _icon = Icon(props?.icon)

    _container.addEventListener('click',() =>{
        _Input.focus()
    } )

    props?.icon && _container.append(_icon)
    _container.append(_Input)

    return _container
}
import { Container } from '././components/Container/index.js'
import { Icon } from './components/shared/Icon/index.js'
import { Input } from './components/shared/input/index.js'


const $root = document.querySelector('#root')

const input = Input({
    icon: 'search',
    placeholder: 'Digite sua pesquisa aqui',
    
})

const container = Container({ children: input})

$root.appendChild(container)


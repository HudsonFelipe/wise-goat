import { Imagem } from './styles'
import  Logo  from '../Logo'

function Layout() {
    return (
        <>
        <Logo></Logo>
        <Imagem src='images/bodezinho.png'></Imagem>
        </>
    )
}

export default Layout;

//perquisar sobre props, verificar se é possivel passar um elemento como props
import { Imagem, Container } from './styles'
import  Logo  from '../Logo'

function Layout() {
    return (
        <Container>
        <Logo />
            <Imagem src='images/bodezinho.png'></Imagem>
        </Container>
    )
}

export default Layout;

//perquisar sobre props, verificar se é possivel passar um elemento como props
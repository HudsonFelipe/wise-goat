import Logo from '../Logo'
import { Container, Mensagem, IMG } from './styled';


function Layout({linkImg, mensagem}) {
    
    return (
        <>
        <Logo />
        <Container>
            <Mensagem>{mensagem}</Mensagem>
            <IMG src={linkImg}></IMG>
        </Container>
        </>
    )
}



export default Layout;
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




export async function getStaticProps() {
    
    


    const mensagem = await carregarMensagem()
    console.log(mensagem)
    
    return {
        props: {},
        
    }
}


export default Layout;
import { LogoBaixo, LogoTopo, Container, Botao } from "./styled";
import Link from 'next/link';

function Logo() {
    return(
        <Container>
        <LogoTopo>Wise</LogoTopo>
        <LogoBaixo>Goat</LogoBaixo>
        <Link href="/conselho"><Botao>Pedir conselho</Botao></Link>
        </Container>
    )
}

export default Logo;
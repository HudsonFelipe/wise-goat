import { LogoBaixo, LogoTopo, Container, Botao } from "./styled";

function Logo() {
    return(
        <Container>
        <LogoTopo>Wise</LogoTopo>
        <LogoBaixo>Goat</LogoBaixo>
        <Botao>Pedir conselho</Botao> 
        </Container>
    )
}

export default Logo;
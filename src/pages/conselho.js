import Layout from "../components/Conselho/LayoutConselho/Index";
import { createClient } from 'pexels';

function Conselho({ linkImg, mensagem }) {

    return (
        <Layout linkImg={linkImg} mensagem={mensagem} />
    )
}

export async function getServerSideProps(){
    const client = createClient(process.env.PEXELS_KEY);
    const query = 'baby goat';

    //Realiza a busca da imagem no pexels
    const linkImg = await client.photos.search({ query, per_page: 1 }).then( async (photos) => {
       const  img = await photos.photos[0].src.medium;
       return img;
    });

    //Realiza a busca do conselho
        const mensagem = await fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((response) => response.slip.advice)

    return {
        props: {
            mensagem,
            linkImg
        }
    }
}

export default Conselho;
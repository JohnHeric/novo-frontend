import Pagina from "../layouts/Pagina.jsx";
import imagem404 from "../../assets/imagens/Tela404.png";
import { Container } from "react-bootstrap";

export default function Tela404(props) {
    return (
        <Pagina>
            <Container>
                <div className="text-center ">
                    <img className="square bg-primary rounded" alt="erro404" src={imagem404} width="500" />
                </div>
                <h1 className="text-center">O recurso solicitado não existe!</h1>
            </Container>
        </Pagina>
    )
}
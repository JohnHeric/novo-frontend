import FormCadProduto from "./formularios/FormCadProduto.jsx";
import Pagina from "../layouts/Pagina.jsx";
import { Alert } from "react-bootstrap";

export default function TelaCadProduto(props) {
    return (
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Produtos
                </h2>
            </Alert>
            <FormCadProduto />
        </Pagina>
    );
}
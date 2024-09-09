import FormCadFornecedor from "./formularios/FormCadFornecedor.jsx";
import Pagina from "../layouts/Pagina.jsx";
import { Alert } from "react-bootstrap";

export default function TelaCadFornecedor(props) {

    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Fornecedores
                </h2>
            </Alert>
            <FormCadFornecedor />
        </Pagina>
    );
}
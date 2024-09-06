import FormCadCategoria from "./formularios/FormCadCategoria.jsx";
import Pagina from "../layouts/Pagina.jsx";
import { Alert } from "react-bootstrap";

export default function TelaCadCategoria(props) {
    return (
        <Pagina>
            <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Categorias
                </h2>
            </Alert>
            <FormCadCategoria />
        </Pagina>
    );
}
import FormCadCategoria from "./formularios/FormCadCategoria.jsx";
import Pagina from "../layouts/Pagina.jsx";
import { Alert } from "react-bootstrap";

export default function TelaCadCategoria(props) {
    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Categorias
                </h2>
            </Alert>
            <FormCadCategoria />
        </Pagina>
    );
}
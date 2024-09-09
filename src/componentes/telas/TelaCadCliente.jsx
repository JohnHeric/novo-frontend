import FormCadCliente from "./formularios/FormCadCliente.jsx";
import Pagina from "../layouts/Pagina.jsx";
import { Alert } from "react-bootstrap";

export default function TelaCadCliente(props) {
    return (
        <Pagina>
            <Alert className="mt-2 mb-2 text-center">
                <h2>
                    Clientes
                </h2>
            </Alert>
            <FormCadCliente />
        </Pagina>
    );
}
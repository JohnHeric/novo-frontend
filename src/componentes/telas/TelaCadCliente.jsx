import FormCadCliente from "./formularios/FormCadCliente";
import { Alert } from "react-bootstrap";

export default function TelaCadCliente(props) {
    return (
        <div>
            <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Clientes
                </h2>
            </Alert>
            <FormCadCliente />
        </div>
    );
}
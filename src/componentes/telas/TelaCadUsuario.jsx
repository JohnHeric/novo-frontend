import FormCadUsuario from "./formularios/FormCadUsuario.jsx"
import { Alert } from "react-bootstrap";

export default function TelaCadUsuario(props) {
    return (
        <div>
            <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Usuários
                </h2>
            </Alert>
            <FormCadUsuario />
        </div>
    );
}
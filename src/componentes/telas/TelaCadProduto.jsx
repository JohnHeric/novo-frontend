import FormCadProduto from "./formularios/FormCadProduto";
import { Alert } from "react-bootstrap";

export default function TelaCadProduto(props) {
    return (
        <div>
            <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Produtos
                </h2>
            </Alert>
            <FormCadProduto />
        </div>
    );
}
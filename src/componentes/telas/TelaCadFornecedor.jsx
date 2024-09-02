import FormCadFornecedor from "./formularios/FormCadFornecedor";
import { Alert } from "react-bootstrap";

export default function TelaCadFornecedor(props) {
    return (
        <div>
            <Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Fornecedores
                </h2>
            </Alert>
            <FormCadFornecedor />
        </div>
    );
}
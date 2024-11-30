import Pagina from "../layouts/Pagina.jsx";
import TabelaProdForn from "./tabelas/TabelaProdForn.jsx";
import { Alert, Container } from "react-bootstrap";
import { consultarFornecedor } from "../../servicos/servicoFornecedor.js";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function TelaProd(props) {
    const params = new URLSearchParams(window.location.search);
    const idUrl = parseInt(params.get('id'));
    const [fornecedor, setFornecedor] = useState([]);

    useEffect(() => {
        consultarFornecedor().then((resultado) => {
            if (Array.isArray(resultado)) {
                resultado.map((forn) => {
                    if (forn.codigo === idUrl)
                        setFornecedor(forn);
                })
                toast.success("Fornecedores carregados com sucesso!");
            } else
                toast.error("Não foi possível carregar os fornecedores!");
        }).catch((erro) => {
            toast.error("Não foi possível carregar os fornecedores!" + erro);
        });
    }, []);

    return (
        <Pagina>
            <Container>
                <Alert className="mt-2 mb-2 text-center" variant="light">
                    <h2>
                        Fornecedor: {fornecedor.razaoSocial}
                    </h2>
                </Alert>
            </Container>
            <TabelaProdForn idUrl={idUrl} />
        </Pagina>
    );
}
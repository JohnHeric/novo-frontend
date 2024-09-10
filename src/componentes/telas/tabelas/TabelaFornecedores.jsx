import { Button, Container, Table } from "react-bootstrap"

export default function TabelaFornecedores(props) {
    return (
        <Container>
            <Button className="mb-3" variant="primary" onClick={() => {
                props.setExibirTabela(false);
            }}>
                Adicionar
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>Nome Fantasia</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Rua</th>
                        <th>Número</th>
                        <th>Cidade</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaDeFornecedores?.map((fornecedor) => {
                            return (
                                <tr>
                                    <td>{fornecedor.razaoSocial}</td>
                                    <td>{fornecedor.cnpj}</td>
                                    <td>{fornecedor.nomeFantasia}</td>
                                    <td>{fornecedor.telefone}</td>
                                    <td>{fornecedor.email}</td>
                                    <td>{fornecedor.rua}</td>
                                    <td>{fornecedor.numero}</td>
                                    <td>{fornecedor.cidade}</td>
                                    <td>{fornecedor.cep}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
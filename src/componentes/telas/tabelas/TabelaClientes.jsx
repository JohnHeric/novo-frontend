import { Button, Container, Table } from "react-bootstrap"

export default function TabelaClientes(props) {
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
                        <th>Nome</th>
                        <th>CPF</th>
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
                        props.listaDeClientes?.map((cliente) => {
                            return (
                                <tr>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.rua}</td>
                                    <td>{cliente.numero}</td>
                                    <td>{cliente.cidade}</td>
                                    <td>{cliente.cep}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
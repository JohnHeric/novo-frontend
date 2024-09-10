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
                                    <th>{cliente.nome}</th>
                                    <th>{cliente.cpf}</th>
                                    <th>{cliente.telefone}</th>
                                    <th>{cliente.email}</th>
                                    <th>{cliente.rua}</th>
                                    <th>{cliente.numero}</th>
                                    <th>{cliente.cidade}</th>
                                    <th>{cliente.cep}</th>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
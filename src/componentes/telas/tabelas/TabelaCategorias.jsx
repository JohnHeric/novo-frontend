import { Button, Container, Table } from "react-bootstrap"

export default function TabelaCategorias(props) {
    return (
        <Container>
            <Button className="mb-3" variant="primary" onClick={() => {
                props.setExibirTabela(false)
            }}>
                Adicionar
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código da Categoria</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaDeCategorias?.map((categoria) => {
                            return (
                                <tr>
                                    <th>{categoria.codigo}</th>
                                    <th>{categoria.descricao}</th>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}
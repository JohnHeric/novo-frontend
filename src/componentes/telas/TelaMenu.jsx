import Pagina from "../layouts/Pagina.jsx"
import { Alert, Container } from "react-bootstrap"

export default function TelaMenu(props) {
    return (
        <Pagina>
            <Container>
                <Alert className="mt-02 mb-02 p-3 success text-center" variant="success">
                    <h2>
                        Tela Menu
                    </h2>
                </Alert>
            </Container>
        </Pagina>
    )
}
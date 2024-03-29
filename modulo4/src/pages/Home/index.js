import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Página inicial</h1>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarcliente" className="btn btn-outline-primary btn-sm">Clientes</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarservico" className="btn btn-outline-primary btn-sm">Serviços</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarpedido" className="btn btn-outline-primary btn-sm">Pedidos</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}
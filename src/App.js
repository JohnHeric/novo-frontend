import Pagina from "./componentes/layouts/Pagina.jsx";
import TelaCadCategoria from "./componentes/telas/TelaCadCategoria.jsx";
import TelaCadCliente from "./componentes/telas/TelaCadCliente.jsx";
import TelaCadFornecedor from "./componentes/telas/TelaCadFornecedor.jsx";
import TelaCadProduto from "./componentes/telas/TelaCadProduto.jsx";
import TelaCadUsuario from "./componentes/telas/TelaCadUsuario.jsx";

function App() {
  return (
    <div className="App">
      <Pagina>
        <TelaCadCliente/>
      </Pagina>
      <Pagina>
        <TelaCadFornecedor/>
      </Pagina>
      <Pagina>
        <TelaCadProduto/>
      </Pagina>
      <Pagina>
        <TelaCadCategoria/>
      </Pagina>
      <Pagina>
        <TelaCadUsuario/>
      </Pagina>
    </div>
  );
}

export default App;

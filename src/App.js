import Tela404 from "./componentes/telas/Tela404.jsx"
import TelaCadCategoria from "./componentes/telas/TelaCadCategoria.jsx";
import TelaCadCliente from "./componentes/telas/TelaCadCliente.jsx";
import TelaCadFornecedor from "./componentes/telas/TelaCadFornecedor.jsx";
import TelaCadProduto from "./componentes/telas/TelaCadProduto.jsx";
import TelaCadUsuario from "./componentes/telas/TelaCadUsuario.jsx";
import TelaLogin from "./componentes/telas/TelaLogin.jsx";
import TelaMenu from "./componentes/telas/TelaMenu.jsx"
import TelaProdForn from "./componentes/telas/TelaProdForn.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import store from "./redux/store.js";
import { Provider } from "react-redux";

export const ContextoUsuario = createContext();

function App() {
  const [usuario, setUsuario] = useState({
    "usuario": "",
    "logado": false,
    "admin": 0
  });

  if (!usuario.logado) {
    return (
      <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
        <TelaLogin />
      </ContextoUsuario.Provider>
    );
  } else
    return (
      <div className="App">
        <Provider store={store}>
          <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
            <BrowserRouter>
              <Routes>
                <Route path="/produtos" element={<TelaCadProduto />} />
                <Route path="/clientes" element={<TelaCadCliente />} />
                <Route path="/fornecedores" element={<TelaCadFornecedor />} />
                <Route path="/produtosfornecedor" element={<TelaProdForn />} />
                <Route path="/categorias" element={<TelaCadCategoria />} />
                <Route path="/usuarios" element={<TelaCadUsuario />} />
                <Route path="/" element={<TelaMenu props="TESTE" />} />
                <Route path="*" element={<Tela404 />} />
              </Routes>
            </BrowserRouter>
          </ContextoUsuario.Provider>
        </Provider>
      </div>
    );
}

export default App;
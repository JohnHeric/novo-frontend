import { configureStore } from "@reduxjs/toolkit";
import categoriaReducer from './categoriaReducer';
import clienteReducer from './clienteReducer';
import fornecedorReducer from './fornecedorReducer';
import produtoReducer from './produtoReducer';
import usuarioReducer from './usuarioReducer';

const store = configureStore({
    reducer: {
        'categoria': categoriaReducer,
        'cliente': clienteReducer,
        'fornecedor': fornecedorReducer,
        'produto': produtoReducer,
        'usuario': usuarioReducer
    }
});

export default store;
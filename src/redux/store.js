import produtoReducer from './produtoReducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        //categoria: categoriaSlice,
        //cliente: clienteSlice,
        //fornecedor: fornecedorSlice,
        'produto': produtoReducer,
        //usuario: usuarioSlice
    }
});

export default store;
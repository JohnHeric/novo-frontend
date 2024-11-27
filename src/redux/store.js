import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from './produtoReducer';

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
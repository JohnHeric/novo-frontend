import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "./estados";
import { alterarCategoria, consultarCategoria, excluirCategoria, gravarCategoria } from "../servicos/servicoCategoria";

export const apagarCategoria = createAsyncThunk('apagarCategoria', async (categoria) => {
    const resultado = await excluirCategoria(categoria);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            categoria
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

export const atualizarCategoria = createAsyncThunk('atualizarCategoria', async (categoria) => {
    const resultado = await alterarCategoria(categoria);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            categoria
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

export const buscarCategorias = createAsyncThunk('buscarCategorias', async () => {
    const resultado = await consultarCategoria();
    try {
        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Categorias recuperadas com sucesso",
                "listaDeCategorias": resultado
            };
        } else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os categorias do backend",
                "listaDeCategorias": []
            }
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem,
            "listaDeCategorias": []
        };
    };
});

export const incluirCategoria = createAsyncThunk('incluirCategoria', async (categoria) => {
    const resultado = await gravarCategoria(categoria);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            categoria
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

const categoriaReducer = createSlice({
    name: 'categoria',
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeCategorias: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buscarCategorias.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Buscando categorias)";
            })
            .addCase(buscarCategorias.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeCategorias = action.payload.listaDeCategorias;
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(buscarCategorias.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(apagarCategoria.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Excluindo categoria)";
            })
            .addCase(apagarCategoria.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeCategorias = state.listaDeCategorias.filter((categoria) =>
                        categoria.codigo !== action.payload.categoria.codigo
                    );
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(apagarCategoria.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(incluirCategoria.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Incluindo categoria)";
            })
            .addCase(incluirCategoria.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeCategorias.push(action.payload.categoria);
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(incluirCategoria.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(atualizarCategoria.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Atualizando categoria)";
            })
            .addCase(atualizarCategoria.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    const i = state.listaDeCategorias.findIndex((categoria) => categoria.codigo === action.payload.categoria.codigo);
                    state.listaDeCategorias[i] = action.payload.categoria;
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(atualizarCategoria.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })
    }
});

export default categoriaReducer.reducer;
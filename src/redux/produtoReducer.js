import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "./estados";
import { alterarProduto, consultarProduto, excluirProduto, gravarProduto } from "../servicos/servicoProduto";

export const apagarProduto = createAsyncThunk('apagarProduto', async (produto) => {
    const resultado = await excluirProduto(produto);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            produto
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

export const atualizarProduto = createAsyncThunk('atualizarProduto', async (produto) => {
    const resultado = await alterarProduto(produto);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            produto
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

export const buscarProdutos = createAsyncThunk('buscarProdutos', async () => {
    const resultado = await consultarProduto();
    try {
        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Produtos recuperados com sucesso",
                "listaDeProdutos": resultado
            };
        } else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os produtos do backend",
                "listaDeProdutos": []
            }
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem,
            "listaDeProdutos": []
        };
    };
});

export const incluirProduto = createAsyncThunk('incluirProduto', async (produto) => {
    const resultado = await gravarProduto(produto);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            produto
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

const produtoReducer = createSlice({
    name: 'produto',
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeProdutos: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buscarProdutos.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Buscando produtos)";
            })
            .addCase(buscarProdutos.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeProdutos = action.payload.listaDeProdutos;
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(buscarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(apagarProduto.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Excluindo produto)";
            })
            .addCase(apagarProduto.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeProdutos = state.listaDeProdutos.filter((produto) =>
                        produto.codigo !== action.payload.produto.codigo
                    );
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(apagarProduto.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(incluirProduto.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Incluindo produto)";
            })
            .addCase(incluirProduto.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeProdutos.push(action.payload.produto);
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(incluirProduto.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(atualizarProduto.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Atualizando produto)";
            })
            .addCase(atualizarProduto.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    const i = state.listaDeProdutos.findIndex((produto) => produto.codigo === action.payload.produto.codigo);
                    state.listaDeProdutos[i] = action.payload.produto;
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(atualizarProduto.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })
    }
});

export default produtoReducer.reducer;
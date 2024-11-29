import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "./estados";
import { alterarFornecedor, consultarFornecedor, excluirFornecedor, gravarFornecedor } from "../servicos/servicoFornecedor";

export const apagarFornecedor = createAsyncThunk('apagarFornecedor', async (fornecedor) => {
    const resultado = await excluirFornecedor(fornecedor);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            fornecedor
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

export const atualizarFornecedor = createAsyncThunk('atualizarFornecedor', async (fornecedor) => {
    const resultado = await alterarFornecedor(fornecedor);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            fornecedor
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

export const buscarFornecedores = createAsyncThunk('buscarFornecedores', async () => {
    const resultado = await consultarFornecedor();
    try {
        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Fornecedores recuperadas com sucesso",
                "listaDeFornecedores": resultado
            };
        } else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os usuarios do backend",
                "listaDeFornecedores": []
            }
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem,
            "listaDeFornecedores": []
        };
    };
});

export const incluirFornecedor = createAsyncThunk('incluirFornecedor', async (fornecedor) => {
    const resultado = await gravarFornecedor(fornecedor);
    try {
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            fornecedor
        };
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro: " + erro.mensagem
        };
    };
});

const fornecedorReducer = createSlice({
    name: 'fornecedor',
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeFornecedores: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buscarFornecedores.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Buscando fornecedores)";
            })
            .addCase(buscarFornecedores.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeFornecedores = action.payload.listaDeFornecedores;
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(buscarFornecedores.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(apagarFornecedor.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Excluindo fornecedor)";
            })
            .addCase(apagarFornecedor.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeFornecedores = state.listaDeFornecedores.filter((fornecedor) =>
                        fornecedor.codigo !== action.payload.fornecedor.codigo
                    );
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(apagarFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(incluirFornecedor.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Incluindo fornecedor)";
            })
            .addCase(incluirFornecedor.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.listaDeFornecedores.push(action.payload.fornecedor);
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(incluirFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })

            .addCase(atualizarFornecedor.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (Atualizando fornecedor)";
            })
            .addCase(atualizarFornecedor.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    const i = state.listaDeFornecedores.findIndex((fornecedor) => fornecedor.codigo === action.payload.fornecedor.codigo);
                    state.listaDeFornecedores[i] = action.payload.fornecedor;
                } else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(atualizarFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })
    }
});

export default fornecedorReducer.reducer;
import api from "./api";

export interface Informacoes {
    id: number;
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

export async function updateInformacoes(
    informacoes: Informacoes
): Promise<Informacoes> {
    const response = await api.put<Informacoes>("/informacoes/1", informacoes);
    return response.data;
}

export async function getInformacoes(): Promise<Informacoes> {
    const response = await api.get<Informacoes>("/informacoes/1");
    return response.data;
}

export async function deleteInformacoes(): Promise<void> {
    await api.delete<Informacoes>("/informacoes/1");
}

export const createOrUpdateInformacoes = async (
    informacoes: Informacoes
): Promise<Informacoes> => {
    if (!informacoes.id) {
        return await updateInformacoes(informacoes);
    } else {
        return await createInformacoes(informacoes);
    }
};

export const createInformacoes = async (
    informacoes: Informacoes
): Promise<Informacoes> => {
    const response = await api.post<Informacoes>("/informacoes", informacoes);
    return response.data;
};

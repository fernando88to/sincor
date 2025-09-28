import axios, {AxiosInstance} from "axios";
import {Estado} from "@/type/Estado";

const ENDERECO_BACKEND = "http://localhost:8080/";
const APPLICATION_JSON = 'application/json';

const METHOD = {
    GET: 'GET',
    POST: 'POST'
}

const instance: AxiosInstance = axios.create({
    baseURL: ENDERECO_BACKEND,
    // timeout: 1000,
    withCredentials: true

});

export async function chamarAxios(url: string, metodo_utilizado: string, dados: any): Promise<any> {
    let config = {
        headers: {
            ACCEPT: APPLICATION_JSON
        }
    };
    if (metodo_utilizado === METHOD.GET) {
        return await instance.get(url, config);
    }
    if (metodo_utilizado === METHOD.POST) {
        return await instance.post(url, config, dados);
    }

}

export const clientBackendEstado = {
    listAll: async (): Promise<Estado[]> => {
        const retornoApi = await chamarAxios('/estado', METHOD.GET, {},);
        if (retornoApi.data == undefined) {
            return [];
        }
        return retornoApi.data as Estado[];
    },


}


import { getAPIClient } from "./axios";

//utilizado apenas para chamadas do browser, sem ser SSR
// toda chamada para o back a partir do browser pode usar esse api
export const api = getAPIClient()
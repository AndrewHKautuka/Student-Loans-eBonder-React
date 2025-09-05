import axios, { type AxiosInstance } from "axios"

import env from "@/config/env"
import { AXIOS_API_CLIENT } from "@/config/fetch"

export const apiClient: AxiosInstance = axios.create({
  baseURL: env.API_URL,
  timeout: AXIOS_API_CLIENT.DEFAULT_TIMEOUT,
  headers: {
    Accept: "application/problem+json",
  },
})

export default apiClient

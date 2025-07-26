import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getLocale } from "./i18n";

// TODO: replace with .env variable in production
const BASE_URL = "https://api.10minuteschool.com";
const API_BASE_URL = `${BASE_URL}/discovery-service/api/v1`;

const Client_Instance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-TENMS-SOURCE-PLATFORM": "web"
    },
});

Client_Instance.interceptors.request.use(
    async (config) => {
        const locale = await getLocale();
        console.log(`Setting locale for API request: ${locale}`);

        config.params = {
            ...config.params,
            lang: locale,
        };

        return config;
    },
    (error) => Promise.reject(error)
);

// handle response transformations
const handleResponse = (response: AxiosResponse) => {
    if (response.data && typeof response.data === 'object') {
        // Transform the response data if needed
        return { ...response.data, status: response.status, statusText: response.statusText };
    }

    return response;
};

const ApiClient = {
    get: async <TResponse, TParams = unknown>(
        url: string,
        params?: TParams,
        config?: AxiosRequestConfig
    ): Promise<TResponse> => {
        try {
            const response: AxiosResponse<TResponse> = await Client_Instance.get(url, {
                ...config,
                params,
            });
            return handleResponse(response);
        } catch (error) {
            console.error("API GET Error:", error);
            throw error;
        }
    },

    post: async <TResponse, TBody = unknown>(
        url: string,
        data?: TBody,
        config?: AxiosRequestConfig
    ): Promise<TResponse> => {
        try {
            const response: AxiosResponse<TResponse> = await Client_Instance.post(url, data, config);
            return handleResponse(response);
        } catch (error) {
            console.error("API POST Error:", error);
            throw error;
        }
    },

    put: async <TResponse, TBody = unknown>(
        url: string,
        data?: TBody,
        config?: AxiosRequestConfig
    ): Promise<TResponse> => {
        try {
            const response: AxiosResponse<TResponse> = await Client_Instance.put(url, data, config);
            return handleResponse(response);
        } catch (error) {
            console.error("API PUT Error:", error);
            throw error;
        }
    },

    delete: async <TResponse>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<TResponse> => {
        try {
            const response: AxiosResponse<TResponse> = await Client_Instance.delete(url, config);
            return handleResponse(response);
        } catch (error) {
            console.error("API DELETE Error:", error);
            throw error;
        }
    },
};

export default ApiClient;
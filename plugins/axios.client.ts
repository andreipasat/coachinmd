// @ts-ignore
import axios from 'axios';

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();
    const axiosInstance = axios.create({
        baseURL: runtimeConfig.public.baseURL,
        timeout: 5000,
    });

    // Interceptors for requests (optional)
    axiosInstance.interceptors.request.use(
        (config: any) => {
            // Add any headers or tokens here
            config.headers['Authorization'] = `Bearer your-token`;
            return config;
        },
        (error: any) => Promise.reject(error)
    );

    // Interceptors for responses (optional)
    axiosInstance.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            console.error('API Error:', error);
            return Promise.reject(error);
        }
    );

    // Make the axios instance globally accessible
    return {
        provide: {
            axios: axiosInstance,
        },
    };
});

// Axios Service
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { AxiosPromise } from 'axios';
import { AxiosInstance } from 'axios';

import { AxiosService as IAxiosService } from '@types';

/* eslint-disable @typescript-eslint/no-explicit-any */

class AxiosService implements IAxiosService {
    private axios: AxiosInstance;
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.giphy.com/v1/gifs/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            params: {
                api_key: process.env.GIPHY_API_KEY
            }
        });
    }

    get(url: string, config?: AxiosRequestConfig): AxiosPromise {
        return this.axios.get(url, config);
    }
    delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
        return this.axios.delete(url, config);
    }
    head(url: string, config?: AxiosRequestConfig): AxiosPromise {
        return this.axios.head(url, config);
    }
    post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
        return this.axios.post(url, data, config);
    }
    put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
        return this.axios.put(url, data, config);
    }
    patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
        return this.axios.patch(url, data, config);
    }
}

const axiosService = new AxiosService();
export default axiosService;
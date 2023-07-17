import axios, { AxiosResponse, AxiosStatic } from 'axios'
import * as rax from 'retry-axios'
import { Api, Response } from '../../../domain/repository/api'
import { HTTPOption } from './option'
import config from '../../../config/config'

export class Http<T> implements Api<T> {
  private readonly axios: AxiosStatic

  constructor(options?: HTTPOption) {
    let HTTPOptions: HTTPOption = {}
    if (options) {
      HTTPOptions = options
    }
    this.axios = axios
    this.axios.defaults.raxConfig = {
      instance: axios,
      retry: HTTPOptions?.retry || config.request.retries,
      backoffType: config.request.backoffType as 'linear' | 'static' | 'exponential',
    }
    rax.attach(this.axios)
  }

  get<T>(url: string, headers: Record<string, string>, token: string): Promise<Response<T>> {
    this.setToken(token, headers)
    return this.axios
      .get(url, {
        headers,
        timeout: config.request.timeout,
      })
      .then((response: AxiosResponse) => {
        const { status, data } = response
        return { status, data }
      })
      .catch((err) => {
        throw err
      })
  }

  post<T>(url: string, body: T, headers: Record<string, string>, token: string): Promise<Response<T>> {
    this.setToken(token, headers)
    return this.axios
      .post(url, body, { headers })
      .then((response: AxiosResponse) => {
        const { status, data } = response
        return { data, status }
      })
      .catch((err) => {
        throw err
      })
  }

  put<T>(url: string, body: T, headers: Record<string, string>, token: string): Promise<Response<T>> {
    this.setToken(token, headers)
    return this.axios
      .put(url, body, { headers })
      .then((response: AxiosResponse) => {
        const { status, data } = response
        return { status, data }
      })
      .catch((error) => {
        throw error
      })
  }

  delete<T>(url: string, headers: Record<string, string>, token: string): Promise<Response<T>> {
    this.setToken(token, headers)
    return this.axios
      .delete(url, { headers })
      .then((response: AxiosResponse) => {
        const { status, data } = response
        return { status, data }
      })
      .catch((error) => {
        throw error
      })
  }

  private setToken(token: string, headers: Record<string, string>) {
    headers['Autorization'] = token
  }
}

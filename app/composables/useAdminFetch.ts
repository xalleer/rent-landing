import { useFetch, useRuntimeConfig, useCookie, navigateTo } from '#app'

export const useAdminFetch = (url: string, options = {}) => {
    const config = useRuntimeConfig()
    const adminKey = useCookie('admin_key')

    const defaults = {
        baseURL: config.public.apiBase,
        headers: {
            'x-admin-key': adminKey.value || ''
        },
        onResponseError({ response }) {
            if (response.status === 403) {
                adminKey.value = null
                return navigateTo('/admin')
            }
        }
    }

    return useFetch(url, {
        ...defaults,
        ...options,
        headers: {
            ...defaults.headers,
            ...options.headers,
        }
    })
}
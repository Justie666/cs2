import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api.two-market.ru'
})

export const authApi = axios.create({
	baseURL: 'https://api.two-market.ru'
})

authApi.interceptors.request.use(
	config => {
		const token = localStorage.getItem('access_token')

		if (token) {
			config.headers['Authorization'] = token
		}
		config.headers['Content-Type'] = 'application/json'
		return config
	},
	error => {
		Promise.reject(error)
	}
)

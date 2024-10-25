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

authApi.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			originalRequest._retry = true

			try {
				const response = await axios.post(
					'https://api.two-market.ru/auth/refresh',
					{
						user_id: window.Telegram.WebApp.initDataUnsafe.user?.id
					},
					{
						withCredentials: true
					}
				)

				const newToken = response.headers['authorization']
				if (newToken) {
					localStorage.setItem('access_token', newToken)

					authApi.defaults.headers['Authorization'] = newToken
					originalRequest.headers['Authorization'] = newToken
				}

				return authApi(originalRequest)
			} catch {
				localStorage.removeItem('access_token')
				return window.Telegram.WebApp.showPopup({
					title: 'Время сессии истекло',
					message: 'Пожалуйста закройте или перезапустите приложение.',
					buttons: [{ id: 'closeWebApp', type: 'close', text: 'Закрыть' }]
				})
			}
		}
		return Promise.reject(error)
	}
)

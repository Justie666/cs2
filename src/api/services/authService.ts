import { api, authApi } from '../instance'

export const authService = {
	login: async (data: LoginData) => {
		const response = await api.post('/auth/login', data)

		const accessToken = response.headers['authorization']

		if (accessToken) {
			localStorage.setItem('access_token', accessToken)
		}

		return response.data
	},

	validateJwt: async () => {
		return await authApi.post('/auth/validateJWTToken')
	}
}

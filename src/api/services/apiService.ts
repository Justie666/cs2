import { authApi } from '../instance'

export const apiService = {
	get: async () => (await authApi.get<string>('user/wallet')).data
}

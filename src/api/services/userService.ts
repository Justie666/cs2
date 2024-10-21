import { authApi } from '../instance'

export const userService = {
	main: async () => {
		return (await authApi.get<UserMain>('/user/main')).data
	},

	full: async () => {
		return (await authApi.get<UserFull>('/user/full')).data
	},

	create: async (data: CreateUserData) => {
		return (await authApi.post('/user', data)).data
	},

	getTradeURL: async () => {
		return (await authApi.get<GetTradeURLResponse>('/user/tradeURL')).data
	},

	updateTradeURL: async (data: UpdateTradeURLData) => {
		return (await authApi.patch('/user/tradeURL', data)).data
	},

	check: async (id: number) => {
		return (
			await authApi.get('/user/check', {
				params: { user_id: id }
			})
		).data
	},

	startTrain: async () => {
		return (await authApi.patch('/user/clip')).data
	},

	kill: async () => {
		return (await authApi.patch('/user/coin')).data
	}
}

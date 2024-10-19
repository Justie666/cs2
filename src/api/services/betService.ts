import { authApi } from '../instance'

export const betService = {
	getAll: async () => (await authApi.get<IEvent[] | null>('/bet/event')).data,

	getById: async (id: number) =>
		(await authApi.get<IEvent>(`/bet/event/specific?event_id=${id}`)).data,

	createBet: async (data: CreateBetData) => {
		return (await authApi.post('/bet', data)).data
	}
}

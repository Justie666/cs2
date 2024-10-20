import { authApi } from '../instance'

export const shopService = {
	getSkins: async (params: GetSkinsParams) =>
		(await authApi.get<Skin[] | null>('/skin', { params })).data,

	getSkinsSearch: async (params: GetSkinsSearchParams) =>
		(await authApi.get<SkinSearch[] | null>('/skin/search', { params })).data,

	getGuns: async () => (await authApi.get<Gun[] | null>('/skin/gun')).data
}

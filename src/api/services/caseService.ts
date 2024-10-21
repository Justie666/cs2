import { authApi } from '../instance'

export const caseService = {
	getAll: async (params: GetAllCasesParams) => {
		return (await authApi.get<Case[] | null>('/case', { params })).data
	},

	getById: async (id: number) => {
		return (await authApi.get<CaseId>(`/case/id`, { params: { case_id: id } }))
			.data
	},

	postCaseOpen: async (data: PostCaseOpenData) => {
		return (await authApi.post<{ id: number }>('/case/open', data)).data
	},

	getCheckCase: async (params: GetCheckCaseParams) => {
		return (await authApi.get<{ seconds: number }>('/case/check', { params }))
			.data
	}
}

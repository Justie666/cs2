import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { caseService } from '../services/caseService'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export const useGetCases = (params: GetAllCasesParams) =>
	useQuery({
		queryKey: ['cases', params],
		queryFn: () => caseService.getAll(params)
	})

export const useGetCaseById = (id: number) =>
	useQuery({
		queryKey: ['case', id],
		queryFn: () => caseService.getById(id)
	})

export const usePostCaseOpen = (data: PostCaseOpenData) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: () => caseService.postCaseOpen(data),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ['checkCase'] }),
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})
}

export const useGetCheckCase = (params: GetCheckCaseParams) =>
	useQuery({
		queryKey: ['checkCase', params],
		queryFn: () => caseService.getCheckCase(params)
	})

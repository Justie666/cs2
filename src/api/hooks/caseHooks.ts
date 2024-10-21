import { useMutation, useQuery } from '@tanstack/react-query'
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

export const usePostCaseOpen = (data: PostCaseOpenData) =>
	useMutation({
		mutationFn: () => caseService.postCaseOpen(data),
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})

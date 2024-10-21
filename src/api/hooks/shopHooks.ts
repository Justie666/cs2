import { useMutation, useQuery } from '@tanstack/react-query'
import { shopService } from '../services/shopService'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

export const useGetAllSkins = (params: GetSkinsParams) =>
	useQuery({
		queryKey: ['allSkins', params],
		queryFn: () => shopService.getSkins(params)
	})

export const useGetSkinsSearch = (params: GetSkinsSearchParams) =>
	useQuery({
		queryKey: ['skinsSearch', params],
		queryFn: () => shopService.getSkinsSearch(params)
	})

export const useGetGuns = () =>
	useQuery({
		queryKey: ['guns'],
		queryFn: () => shopService.getGuns()
	})

export const useGetSkinById = (params: GetSkinById) =>
	useQuery({
		queryKey: ['skinById', params],
		queryFn: () => shopService.getSkinById(params)
	})

export const usePostBuySkin = () => {
	return useMutation({
		mutationFn: (data: PostBuySkinData) => shopService.postBuySkin(data),
		onSuccess: () => {
			toast.success('Скин куплен')
		},
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})
}

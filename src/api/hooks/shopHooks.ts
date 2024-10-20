import { useQuery } from '@tanstack/react-query'
import { shopService } from '../services/shopService'

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

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { betService } from '../services/betService'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export const useGetBets = () => {
	return useQuery({
		queryKey: ['bets'],
		queryFn: () => betService.getAll()
	})
}

export const useGetBetById = (id: number) => {
	return useQuery({
		queryKey: ['bet', id],
		queryFn: () => betService.getById(id)
	})
}

export const usePostBet = () => {
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation({
		mutationFn: (data: CreateBetData) => betService.createBet(data),
		onSuccess: () => {
			toast.success('Ставка создана')
			navigate('/bets')
			queryClient.invalidateQueries({ queryKey: ['userMain'] })
		},
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})
}

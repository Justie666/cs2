import { useMutation, useQuery } from '@tanstack/react-query'
import { userService } from '../services/userService'
import { authApi } from '../instance'

export const useGetUserMain = () =>
	useQuery({
		queryKey: ['userMain'],
		queryFn: () => userService.main()
	})

export const useGetUserFull = () =>
	useQuery({
		queryKey: ['userFull'],
		queryFn: () => userService.full()
	})

export const usePostUserCreate = () =>
	useMutation({
		mutationFn: (data: CreateUserData) => userService.create(data)
	})

export const useGetTradeURL = () =>
	useQuery({
		queryKey: ['tradeURL'],
		queryFn: () => userService.getTradeURL()
	})

export const useUpdateTradeURL = () => {
	return useMutation({
		mutationFn: (data: UpdateTradeURLData) => userService.updateTradeURL(data)
	})
}

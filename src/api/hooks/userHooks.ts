import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userService } from '../services/userService'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

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

export async function checkStartParam(startParam: string | undefined) {
	if (startParam) {
		if (startParam.startsWith('referrer')) {
			const userId = startParam.replace('referrer', '')
			if (window.Telegram.WebApp.initDataUnsafe.user?.id === +userId) {
				return null
			}
			if (/^\d+$/.test(userId)) {
				try {
					userService.check(+userId)
					return userId
				} catch {
					return null
				}
			}
		}
	}
	return null
}

export const usePostUserCreate = () =>
	useMutation({
		mutationFn: async () =>
			userService.create({
				id: window.Telegram.WebApp.initDataUnsafe.user?.id + '',
				name: window.Telegram.WebApp.initDataUnsafe.user?.first_name + '',
				referrer_id:
					(await checkStartParam(
						window.Telegram.WebApp.initDataUnsafe.start_param
					)) || null,
				time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				username: window.Telegram.WebApp.initDataUnsafe.user?.username + ''
			})
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

export const usePathStartTrain = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: () => userService.startTrain(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userMain'] })
		},
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})
}

export const usePathKill = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: () => userService.kill(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userMain'] })
		},
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})
}

export const usePathCoins = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: PathCoinData) => userService.pathCoin(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['userMain'] })
		}
	})
}

export const useOutputSkin = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: OutputSkinData) => userService.outputSkin(data),
		onSuccess: response => {
			let message = ' '
			switch (response.status) {
				case 'success':
					message = 'Заявка на вывод успешно создана'
					break
				case 'not_found_trade_url':
					message = 'У вас не указана Trade URL'
					break
				case 'no_validated_trade_url':
					message = 'Вы ввели некорректный Trade URL'
					break
				case 'not_found_skin':
					message = 'У вас нет такого скина'
					break
				case 'no_skins':
					message =
						'Упс...  скина сейчас нет в наличии. Вы можете его продать и выбрать другой'
					break
				case 'no_money':
					message = 'Произошла техническая ошибка'
					break
				case 'didnt_buy':
					message = 'Произошла техническая ошибка'
					break
				case 'unknown_error':
					message = 'Произошла техническая ошибка'
					break
			}
			if (response.status) {
				queryClient.invalidateQueries({ queryKey: ['userFull'] })
			}

			toast.error(message)
			queryClient.invalidateQueries({ queryKey: ['userFull'] })
		}
	})
}

export const useSellSkin = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: SellSkinData) => userService.sellSkin(data),
		onSuccess: () => {
			toast.success('Скин продан')
			queryClient.invalidateQueries({ queryKey: ['userFull'] })
			queryClient.invalidateQueries({ queryKey: ['userMain'] })
		},
		onError: error => {
			const axiosError = error as AxiosError<{ detail: string }>
			toast.error(axiosError.response?.data?.detail || 'Произошла ошибка')
		}
	})
}

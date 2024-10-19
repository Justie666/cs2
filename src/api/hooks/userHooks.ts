import { useMutation, useQuery } from '@tanstack/react-query'
import { userService } from '../services/userService'

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

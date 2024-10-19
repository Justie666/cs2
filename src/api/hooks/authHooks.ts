import { useMutation } from '@tanstack/react-query'
import { authService } from '../services/authService'

export const usePostLogin = () =>
	useMutation({
		mutationFn: () =>
			authService.login({
				init_data: window.Telegram.WebApp.initData,
				user_id: window.Telegram.WebApp.initDataUnsafe.user?.id + '',
				username: window.Telegram.WebApp.initDataUnsafe.user?.username + ''
			})
	})

import { useMutation } from '@tanstack/react-query'
import { authService } from '../services/authService'

export const usePostLogin = () =>
	useMutation({
		mutationFn: (data: LoginData) => authService.login(data)
	})

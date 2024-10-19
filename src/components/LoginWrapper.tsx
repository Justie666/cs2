import { PropsWithChildren, useEffect, useState } from 'react'
import { usePostLogin } from '../api/hooks/authHooks'
import { Loader2 } from 'lucide-react'
import { AxiosError } from 'axios'
import { usePostUserCreate } from '../api/hooks/userHooks'

window.Telegram = {
	WebApp: {
		// @ts-ignore
		initDataUnsafe: {
			user: {
				id: 844642570,
				username: 'Nikita',
				first_name: 'Nikita228'
			}
		},
		offEvent: () => {},
		HapticFeedback: {
			//@ts-ignore
			impactOccurred(style) {
				console.log(style)
			}
		},
		BackButton: {
			hide() {},
			// @ts-ignore
			offClick(callback) {},
			show() {},
			// @ts-ignore
			onClick(callback) {}
		},
		initData: 'lala',
		ready: () => {},
		// @ts-ignore
		onEvent: (
			type: 'popupClosed',
			callback: { button_id: string | null }
		) => {},
		CloudStorage: {
			// @ts-ignore
			setItem(
				key: string,
				value: string,
				callback?: (err: Error | null, success: boolean) => void
			): void {
				console.log('setItem')

				// @ts-ignore
				if (!this.isValidKey(key)) {
					callback?.(new Error('Invalid key'), false)
					return
				}
				console.log('setItem')
				if (value.length > 4096) {
					callback?.(new Error('Value exceeds maximum length'), false)
					return
				}
				try {
					console.log(key, value)

					localStorage.setItem(key, value)
					callback?.(null, true)
				} catch (error) {
					console.error(error)

					// @ts-ignore
					callback?.(error, false)
				}
			},
			// @ts-ignore
			getItem(
				key: string,
				callback: (err: Error | null, value: string | null) => void
			): void {
				// @ts-ignore
				if (!this.isValidKey(key)) {
					callback(new Error('Invalid key'), null)
					return
				}
				try {
					const value = localStorage.getItem(key)
					callback(null, value)
				} catch (error) {
					// @ts-ignore
					callback(error, null)
				}
			},
			isValidKey(key: string): boolean {
				return (
					key.length >= 1 && key.length <= 128 && /^[A-Za-z0-9_-]+$/.test(key)
				)
			}
		}
	}
}

export const LoginWrapper = ({ children }: PropsWithChildren) => {
	const { mutate: login, error, isSuccess } = usePostLogin()
	const { mutate: createUser, isSuccess: isUserCreated } = usePostUserCreate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		login()
	}, [login])

	useEffect(() => {
		if (error && (error as AxiosError).status === 404) {
			createUser()
		}
	}, [error, createUser])

	useEffect(() => {
		if (isUserCreated) {
			login()
		}
	}, [isUserCreated, login])

	useEffect(() => {
		if (isSuccess) {
			setIsLoading(false)
		}
	}, [isSuccess])

	if (isLoading) {
		return (
			<div className='min-h-screen flex flex-col justify-center items-center'>
				<div className='animate-spin'>
					<Loader2 size={40} />
				</div>
			</div>
		)
	}

	return <div>{children}</div>
}

import { PropsWithChildren, useEffect } from 'react'
import { usePostLogin } from '../api/hooks/authHooks'
import { Loader2 } from 'lucide-react'

export const LoginWrapper = ({ children }: PropsWithChildren) => {
	const { mutate, isPending } = usePostLogin()
	useEffect(() => {
		// Trigger login or mutation based on certain conditions
		mutate({
			init_data: '',
			user_id: '844642570',
			username: 'Artem'
		})
	}, [mutate])

	// 404 user нет

	if (isPending)
		return (
			<div className='min-h-screen flex flex-col justify-center items-center'>
				<div className='animate-spin'>
					<Loader2 size={40} />
				</div>
			</div>
		)

	return <div>{children}</div>
}

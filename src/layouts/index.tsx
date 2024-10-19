import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginWrapper } from '../components/LoginWrapper'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 2
		}
	}
})

export const IndexLayout = () => {
	return (
		<div className='bg-bgColor min-h-screen text-white relative'>
			<QueryClientProvider client={queryClient}>
				<LoginWrapper>
					<Outlet />
					<Nav />
					<Toaster
						position='top-center'
						toastOptions={{
							className: 'bg-primary border-none',
							duration: 1000
						}}
					/>
				</LoginWrapper>
			</QueryClientProvider>
		</div>
	)
}

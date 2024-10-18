import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginWrapper } from '../components/LoginWrapper'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
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
				</LoginWrapper>
			</QueryClientProvider>
		</div>
	)
}

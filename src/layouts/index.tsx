import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginWrapper } from '../components/LoginWrapper'
import { Toaster } from 'sonner'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

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
				<TonConnectUIProvider manifestUrl='https://two-market.ru/tonconnect-manifest.json'>
					<LoginWrapper>
						<Outlet />
						<Nav />
						<Toaster
							position='top-center'
							toastOptions={{
								className: 'bg-primary border-none',
								duration: 3000
							}}
						/>
					</LoginWrapper>
				</TonConnectUIProvider>
			</QueryClientProvider>
		</div>
	)
}

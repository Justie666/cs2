import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { IndexLayout } from './layouts'
import { StatsPage } from './pages/StatsPage'
import { InfoPage } from './pages/InfoPage'
import { ProfilePage } from './pages/ProfilePage'
import { ReferralsPage } from './pages/ReferralsPage'
import { SettingsPage } from './pages/SettingsPage'
import { BetsPage } from './pages/BetsPage'
import { StatsBetsPage } from './pages/StatsBetsPage'
import { ShopPage } from './pages/ShopPage'
import { CaseIdPage } from './pages/CaseIdPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/stats',
				element: <StatsPage />
			},
			{
				path: '/info',
				element: <InfoPage />
			},
			{
				path: '/profile',
				element: <ProfilePage />
			},
			{
				path: '/referrals',
				element: <ReferralsPage />
			},
			{
				path: '/settings',
				element: <SettingsPage />
			},
			{
				path: '/bets',
				element: <BetsPage />
			},
			{
				path: '/stats-bets',
				element: <StatsBetsPage />
			},
			{
				path: '/case/:id',
				element: <CaseIdPage />
			},
			{
				path: '/shop',
				element: <ShopPage />
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)

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
import { MySkinsPage } from './pages/MySkinsPage'
import { MySkinIdPage } from './pages/MySkinIdPage'
import { MyBetsPage } from './pages/MyBetsPage'
import { BetPage } from './pages/BetPage'
import { TrainingPage } from './pages/TrainingPage'
import { SkinBuyPage } from './pages/SkinBuyPage'
import { ReplenishPage } from './pages/ReplenishPage'

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
				path: '/my-skins',
				element: <MySkinsPage />
			},
			{
				path: '/my-bets',
				element: <MyBetsPage />
			},
			{
				path: '/my-skin/:id',
				element: <MySkinIdPage />
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
				path: '/bet/:type/:id',
				element: <BetPage />
			},
			{
				path: '/shop',
				element: <ShopPage />
			},
			{
				path: '/training',
				element: <TrainingPage />
			},
			{
				path: '/skin-buy/:id',
				element: <SkinBuyPage />
			},
			{
				path: '/replenish',
				element: <ReplenishPage />
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)

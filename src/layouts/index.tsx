import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav'

export const IndexLayout = () => {
	return (
		<div className='bg-bgColor min-h-screen text-white relative'>
			<Outlet />
			<Nav />
		</div>
	)
}

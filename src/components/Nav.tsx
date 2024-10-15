import { Link, useLocation } from 'react-router-dom'
import { TourNamentIcon } from '../icons/TourNamentIcon'
import { ShoppingBagIcon } from '../icons/ShoppingBagIcon'
import { RifleIcon } from '../icons/RifleIcon'
import { BagIcon } from '../icons/BagIcon'

export const Nav = () => {
	const { pathname } = useLocation()

	if (pathname === '/stats') return
	if (pathname === '/settings') return
	if (pathname === '/referrals') return
	if (pathname.includes('/case/')) return

	return (
		<div className='rounded-[27px] shadow-[0px_-4px_14px_0px_#C9A86B] fixed z-20 bottom-0 w-[99%] left-1/2 -translate-x-1/2 overflow-hidden'>
			<div className='shadow-[inset_3px_3px_27.6px_0px_#000000CC] bg-[#2c2c2c] py-[20px] px-[50px] flex items-center justify-between'>
				<Link to='/' className={`${pathname !== '/' && 'opacity-30'}`}>
					<TourNamentIcon />
				</Link>
				<Link to='/bets' className={`${pathname !== '/bets' && 'opacity-30'}`}>
					<RifleIcon />
				</Link>
				<Link to='/shop' className={`${pathname !== '/shop' && 'opacity-30'}`}>
					<ShoppingBagIcon />
				</Link>
				<Link
					to='/profile'
					className={`${pathname !== '/profile' && 'opacity-30'}`}>
					<BagIcon />
				</Link>
			</div>
		</div>
	)
}

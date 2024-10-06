import { Link } from 'react-router-dom'
import { BackpackIcon } from '../icons/BackpackIcon'
import { BulletsIcon } from '../icons/BulletsIcon'
import { CoinIcon } from '../icons/CoinIcon'
import { TetherIcon } from '../icons/TetherIcon'

export const HomePage = () => {
	return (
		<div className='relative container px-5 pt-4 flex flex-col min-h-screen z-10 overflow-hidden'>
			<div>
				<div className='shadow-inset-custom bg-bgColor rounded-xl px-9 py-4 flex items-center justify-between gap-3'>
					<img
						src='https://www.svgrepo.com/show/81103/avatar.svg'
						alt='avatar'
						className='size-[50px] rounded-full overflow-hidden object-cover flex-shrink-0'
					/>
					{/* TODO сделать получение имени из тг */}
					<div className='rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] px-4 py-3 font-medium text-[20px] w-full'>
						user
					</div>
					<Link
						to={'/profile'}
						className='size-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] flex items-center justify-center rounded-full flex-shrink-0'>
						<BackpackIcon />
					</Link>
				</div>
				<div className='flex items-center justify-center gap-[30px] mt-[20px]'>
					<div className='shadow-inset-custom rounded-full px-2 flex items-center gap-[6px]'>
						<CoinIcon />
						<div className='font-medium text-[20px]'>321</div>
					</div>
					<div className='shadow-inset-custom rounded-full px-2 flex items-center gap-[6px]'>
						<TetherIcon />
						<div className='font-medium text-[20px]'>321</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center mt-[30px]'>
				<img
					src='/crosshair.png'
					alt=''
					className='size-[250px] object-cover'
				/>
			</div>
			<div className='size-[310px] left-1/2 -translate-x-1/2 -bottom-28 absolute z-20 bg-bgColor rounded-full shadow-[inset_3px_3px_27.6px_#000000CC] flex items-center justify-center'>
				<div className='rounded-full bg-[#000] shadow-[0px_-4px_4px_0px_#C9A86B] size-[220px] flex justify-center items-start pt-[35px]'>
					<div className='flex items-center gap-3'>
						<BulletsIcon />
						<BulletsIcon />
						<BulletsIcon />
					</div>
				</div>
			</div>
		</div>
	)
}

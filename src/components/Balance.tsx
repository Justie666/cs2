import { CoinIcon } from '../icons/CoinIcon'
import { TetherIcon } from '../icons/TetherIcon'

export const Balance = () => {
	return (
		<div className='flex items-center justify-center gap-[5px]'>
			<div className='shadow-inset-custom rounded-full pl-1 pr-3 flex items-center gap-[6px]'>
				<CoinIcon />
				<div className='font-medium text-[20px]'>321</div>
			</div>
			<div className='shadow-inset-custom rounded-full pl-1 pr-3 flex items-center gap-[6px]'>
				<TetherIcon />
				<div className='font-medium text-[20px]'>321</div>
			</div>
		</div>
	)
}

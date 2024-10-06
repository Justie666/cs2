import { CoinIcon } from '../icons/CoinIcon'
import { TeamIcon } from '../icons/TeamIcon'
import { TetherIcon } from '../icons/TetherIcon'

interface SkinItemProps {
	imgUrl: string
	currency: 'tether' | 'coin' | 'referrals'
	value: string
}

export const SkinItem = ({ currency, imgUrl, value }: SkinItemProps) => {
	return (
		<div className='relative'>
			<div className='w-full aspect-square rounded-[15px] bg-[#161616] flex items-center justify-center'>
				<img src={imgUrl} alt='' />
			</div>
			<div className='absolute left-1/2 -translate-x-1/2 -bottom-4 bg-bgColor shadow-inset-custom rounded-full pl-[3px] pr-[10px] flex items-center gap-[6px]'>
				{currency === 'coin' && <CoinIcon />}
				{currency === 'tether' && <TetherIcon />}
				{currency === 'referrals' && <TeamIcon />}
				<div className='font-medium text-[20px]'>{value}</div>
			</div>
		</div>
	)
}

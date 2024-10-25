import { useNavigate } from 'react-router-dom'
import { CoinIcon } from '../icons/CoinIcon'
import { TeamIcon } from '../icons/TeamIcon'
import { TetherIcon } from '../icons/TetherIcon'
import { getColorRarity } from '../utils/getColorRarity'

interface SkinItemProps {
	imgUrl: string
	currency: 'tether' | 'coin' | 'referrals'
	value?: string | number
	href?: string
	name: string
	rarity: Rarity
}

export const SkinItem = ({
	currency,
	imgUrl,
	value,
	href,
	name,
	rarity
}: SkinItemProps) => {
	const navigate = useNavigate()
	const handleClick = () => {
		if (href) {
			navigate(href)
		}
	}

	return (
		<div
			onClick={() => handleClick()}
			className={`h-full relative ${href && 'cursor-pointer'}`}>
			<div className='w-full pt-2 pb-6 h-full rounded-[15px] bg-[#161616] flex items-center justify-center flex-col'>
				<div className='px-3 mt-3 text-center'>{name}</div>
				<img src={imgUrl} alt='' className='z-50 h-[100px] object-cover' />
			</div>
			{value && (
				<div className='absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-bgColor shadow-inset-custom rounded-full z-50 pl-[3px] pr-[10px] flex items-center gap-[6px]'>
					{currency === 'coin' && <CoinIcon />}
					{currency === 'tether' && <TetherIcon />}
					{currency === 'referrals' && <TeamIcon />}
					<div className='font-medium text-[20px]'>{value}</div>
				</div>
			)}

			<div className='absolute inset-0 overflow-hidden'>
				<div
					className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-[90px] rounded-full blur'
					style={{
						background: getColorRarity(rarity)
					}}
				/>
			</div>
		</div>
	)
}

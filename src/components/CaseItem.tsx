import { useNavigate } from 'react-router-dom'
import { CoinIcon } from '../icons/CoinIcon'
import { TeamIcon } from '../icons/TeamIcon'
import { TetherIcon } from '../icons/TetherIcon'

export const CaseItem = ({ id, name, photo_url, price, type_price }: Case) => {
	const navigate = useNavigate()
	const handleClick = () => {
		if (id) {
			navigate(`/case/${id}`)
		}
	}

	return (
		<div
			onClick={() => handleClick()}
			className={`relative ${id && 'cursor-pointer'}`}>
			<div className='w-full aspect-square rounded-[15px] bg-[#161616] flex items-center justify-center'>
				<img src={photo_url} alt='' className='z-50' />
			</div>
			<div className='px-3 mt-3 absolute left-1/2 -translate-x-1/2 -top-[2px] text-center'>
				{name}
			</div>
			<div className='absolute left-1/2 -translate-x-1/2 top-[140px] bg-bgColor shadow-inset-custom rounded-full z-50 pl-[3px] pr-[10px] flex items-center gap-[6px]'>
				{type_price === 'coin' && <CoinIcon />}
				{type_price === 'usdt' && <TetherIcon />}
				{type_price === 'friend' && <TeamIcon />}
				<div className='font-medium text-[20px]'>{price}</div>
			</div>
		</div>
	)
}

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
			className={`h-full relative ${id && 'cursor-pointer'}`}>
			<div className='w-full h-full pt-2 pb-6  rounded-[15px] bg-[#161616] flex items-center justify-center flex-col'>
				<div className='px-3 mt-3 text-wrap text-center'>{name}</div>
				<img
					src={photo_url}
					alt=''
					className='z-50 w-[120px] h-[100px] object-cover'
				/>
			</div>

			<div className='absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-bgColor shadow-inset-custom rounded-full z-50 pl-[3px] pr-[10px] flex items-center gap-[6px]'>
				{type_price === 'coin' && <CoinIcon />}
				{type_price === 'usdt' && <TetherIcon />}
				{type_price === 'friend' && <TeamIcon />}
				<div className='font-medium text-[20px]'>{price}</div>
			</div>
		</div>
	)
}

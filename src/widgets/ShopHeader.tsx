import { Link } from 'react-router-dom'
import { QuestionIcon } from '../icons/QuestionIcon'
import { TeamIcon } from '../icons/TeamIcon'
import Balance from "../components/Balance.tsx";

export const ShopHeader = () => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center justify-center gap-[10px]'>
				<Balance/>
				<div className='shadow-inset-custom rounded-full pl-[3px] pr-[10px] flex items-center gap-[6px]'>
					<TeamIcon />
					<div className='font-medium text-[20px]'>321</div>
				</div>
			</div>
			<Link
				to={'/info'}
				className='block size-[44px] rounded-full shadow-[inset_0px_4px_4px_0px_#FFFFFF40]'>
				<div className='w-full h-full rounded-full flex items-center justify-center shadow-[0px_1px_2px_1px_#000000]'>
					<QuestionIcon />
				</div>
			</Link>
		</div>
	)
}

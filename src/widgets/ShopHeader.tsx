import { Link } from 'react-router-dom'
import { QuestionIcon } from '../icons/QuestionIcon'
import { Balance } from '../components/Balance'

export const ShopHeader = () => {
	return (
		<div className='flex items-center justify-between'>
			<Balance referrers />
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

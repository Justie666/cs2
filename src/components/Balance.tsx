import { useGetUserMain } from '../api/hooks/userHooks'
import { CoinIcon } from '../icons/CoinIcon'
import { RefIcon } from '../icons/RefIcon'
import { TetherIcon } from '../icons/TetherIcon'

export const Balance = ({ referrers }: { referrers?: boolean }) => {
	const { data } = useGetUserMain()

	return (
		<div className='flex items-center justify-center gap-[5px]'>
			<div className='shadow-inset-custom rounded-full pl-1 pr-3 flex items-center gap-[6px]'>
				<CoinIcon />
				<div className='font-medium text-[20px]'>{data?.balance_coin || 0}</div>
			</div>
			<div className='shadow-inset-custom rounded-full pl-1 pr-3 flex items-center gap-[6px]'>
				<TetherIcon />
				<div className='font-medium text-[20px]'>{data?.balance_usdt || 0}</div>
			</div>
			{referrers && (
				<div className='shadow-inset-custom rounded-full pl-1 pr-3 flex items-center gap-[6px]'>
					<RefIcon />
					<div className='font-medium text-[20px]'>
						{data?.balance_referrers || 0}
					</div>
				</div>
			)}
		</div>
	)
}

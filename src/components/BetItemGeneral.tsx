import { useState } from 'react'
import { ArrowDownIcon2 } from '../icons/ArrowDownIcon2'
import { CoinIcon } from '../icons/CoinIcon'
import { TetherIcon } from '../icons/TetherIcon'
import { formatToUserTimezone } from '../utils/formatToUserTimezone'
import { Link } from 'react-router-dom'

export const BetItemGeneral = ({ bet }: { bet: IEvent }) => {
	const [isOpen, setIsOpen] = useState(false)

	const amountTeam1 = bet.teams[0].total_coin + bet.teams[0].total_usdt
	const amountTeam2 = bet.teams[1].total_coin + bet.teams[1].total_usdt

	const generalAmount = amountTeam1 + amountTeam2

	const percentTeam1 =
		generalAmount === 0 ? 0 : ((amountTeam1 / generalAmount) * 100).toFixed(2)
	const percentTeam2 =
		generalAmount === 0 ? 0 : ((amountTeam2 / generalAmount) * 100).toFixed(2)

	return (
		<div>
			<div className='relative mb-[20px]'>
				<Link
					to={bet.status ? `/bet/win/${bet.id}` : '#'}
					className='flex items-center gap-[20px] justify-center border-2 border-primary bg-[rgba(76,76,76,0.5)] py-[23px] px-[21px] rounded-[20px] relative z-10'>
					<div className='flex flex-col items-center justify-center'>
						<div className='rounded-full border border-primary size-[71px] shadow-[0px_-4px_4px_0px_#C9A86B] relative'>
							{!bet.status && bet.teams[0].team.id !== bet.won && (
								<div className='absolute inset-0 bg-red-800/60 p-[1px] rounded-full' />
							)}

							<img src={bet.teams[0].team.logo_url} className='rounded-full' />
						</div>
						<div className='font-medium text-[15px] text-center'>
							{bet.teams[0].team.name}
						</div>
						<div className='text-[12px]'>{percentTeam1}%</div>
					</div>
					<div className='flex flex-col gap-[3px] text-[12px]'>
						<div className='relative border border-[rgba(76,76,76,1)] flex items-center justify-between gap-[10px] rounded-[20px]  py-[5px] bg-[rgba(44,44,44,1)]'>
							<div className='w-[40px] text-center'>
								{bet.teams[0].total_coin}
							</div>
							<div className='w-[1px] h-[10px] rounded-[10px] bg-[rgba(76,76,76,1)]'></div>
							<div className='w-[40px] text-center'>
								{bet.teams[0].total_usdt}
							</div>
							<div className='absolute left-1/2 -translate-x-1/2 -top-3'>
								<CoinIcon />
							</div>
						</div>
						<div className='relative border border-[rgba(76,76,76,1)] flex items-center justify-between gap-[10px] rounded-[20px]  py-[5px] bg-[rgba(44,44,44,1)]'>
							<div className='w-[40px] text-center'>
								{bet.teams[1].total_coin}
							</div>
							<div className='w-[1px] h-[10px] rounded-[10px] bg-[rgba(76,76,76,1)]'></div>
							<div className='w-[40px] text-center'>
								{bet.teams[1].total_coin}
							</div>
							<div className='absolute left-1/2 -translate-x-1/2 -top-3'>
								<TetherIcon />
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<div className=' rounded-full border border-primary size-[71px] relative'>
							{!bet.status && bet.teams[1].team.id !== bet.won && (
								<div className='absolute inset-0 bg-red-800/60 p-[1px] rounded-full' />
							)}
							<img src={bet.teams[1].team.logo_url} className='rounded-full' />
						</div>
						<div className='font-medium text-[15px] text-center'>
							{bet.teams[1].team.name}
						</div>
						<div className='text-[12px]'>{percentTeam2}%</div>
					</div>
				</Link>
				<div className='border-2 border-primary px-[12px] rounded-[15px] absolute left-1/2 -translate-x-1/2 -top-7 bg-[rgba(44,44,44,1)] z-20'>
					<div className='text-[32px] text-center font-semibold'>
						{bet.teams[0].score}:{bet.teams[1].score}
					</div>
				</div>
				<div className='absolute border border-primary rounded-[15px] bg-[rgba(44,44,44,1)] text-[12px] text-center px-[40px] -bottom-2 left-1/2 -translate-x-1/2 text-primary z-20 w-[60%]'>
					{formatToUserTimezone(bet.date_start)}
				</div>
				{!isOpen && (
					<>
						<div className='absolute z-0 bg-[linear-gradient(0deg,#C9A86B_0%,#2C2C2C_70.93%)] w-full rounded-[14px] h-[50px] -bottom-5'></div>
						<div
							onClick={() => setIsOpen(true)}
							className='cursor-pointer absolute rounded-[10px] flex items-center justify-center px-[12px] py-[6px] bg-[rgba(76,76,76,1)] left-1/2 -translate-x-1/2 -bottom-7'>
							<ArrowDownIcon2 />
						</div>
					</>
				)}
			</div>
			{isOpen && (
				<div className='mt-[10px] flex flex-col gap-[5px] relative mb-[20px]'>
					<Link
						to={`/bet/win/${bet.id}`}
						className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[20px] pb-[12px] relative z-20 text-[15px] font-medium'>
						<div className='text-center'>Победа</div>
					</Link>
					<Link
						to={`/bet/score/${bet.id}`}
						className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[20px] pb-[12px] relative z-20 text-[15px] font-medium'>
						<div className='text-center'>Сухой счет по картам</div>
					</Link>
					<Link
						to={`/bet/map1/${bet.id}`}
						className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[20px] pb-[12px] relative z-20 text-[15px] font-medium'>
						<div className='text-center'>Победитель 1 карты</div>
					</Link>
					<Link
						to={`/bet/map2/${bet.id}`}
						className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[20px] pb-[12px] relative z-20 text-[15px] font-medium'>
						<div className='text-center'>Победитель 2 карты</div>
					</Link>
					<Link
						to={`/bet/knife/${bet.id}`}
						className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[20px] pb-[12px] relative z-20 text-[15px] font-medium'>
						<div className='text-center'>Нож</div>
					</Link>
					<>
						<div className='absolute z-0 bg-[linear-gradient(0deg,#C9A86B_0%,#2C2C2C_70.93%)] w-full rounded-[14px] h-[50px] -bottom-5'></div>
						<div
							onClick={() => setIsOpen(false)}
							className='cursor-pointer absolute rounded-[10px] flex items-center justify-center px-[12px] py-[6px] bg-[rgba(76,76,76,1)] left-1/2 -translate-x-1/2 -bottom-7'>
							<div className='rotate-180'>
								<ArrowDownIcon2 />
							</div>
						</div>
					</>
				</div>
			)}
		</div>
	)
}

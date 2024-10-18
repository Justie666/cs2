import { useEffect, useState } from 'react'
import { CoinIcon } from '../icons/CoinIcon'
import { TetherIcon } from '../icons/TetherIcon'
import { formatToUserTimezone } from '../utils/formatToUserTimezone'
import { getBetType } from '../utils/getBetType'
import { ArrowDownIcon2 } from '../icons/ArrowDownIcon2'

export const BetItem = ({ bet }: { bet: IBets }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isWon, setIsWon] = useState(false)

	const amountTeam1 =
		bet.event.teams[0].total_coin + bet.event.teams[0].total_usdt
	const amountTeam2 =
		bet.event.teams[1].total_coin + bet.event.teams[1].total_usdt

	const generalAmount = amountTeam1 + amountTeam2

	const percentTeam1 =
		generalAmount === 0 ? 0 : ((amountTeam1 / generalAmount) * 100).toFixed(2)
	const percentTeam2 =
		generalAmount === 0 ? 0 : ((amountTeam2 / generalAmount) * 100).toFixed(2)

	const betType = bet.bet_type as BetType

	console.log(bet.event.teams[0].id)
	console.log(bet.event.teams)

	useEffect(() => {
		if (betType === 'knife') {
			if (bet.event.knife) setIsWon(true)
		} else if (betType === 'dry_bill') {
			if (bet.event.dry_bill) setIsWon(true)
		} else if (betType === 'win') {
			setIsWon(
				bet.event.teams.find(team => team.id === bet.event_team_id)?.team.id ===
					bet.event.won
			)
		} else if (betType === 'winner_first_card') {
			setIsWon(
				bet.event.teams.find(team => team.id === bet.event_team_id)?.team.id ===
					bet.event.won_first_map
			)
		} else if (betType === 'winner_second_card') {
			setIsWon(
				bet.event.teams.find(team => team.id === bet.event_team_id)?.team.id ===
					bet.event.won_second_map
			)
		} else {
			setIsWon(true)
		}
	}, [
		bet.event.dry_bill,
		bet.event.knife,
		bet.event.teams,
		bet.event.won,
		bet.event.won_first_map,
		bet.event.won_second_map,
		bet.event_team_id,
		betType
	])

	return (
		<div>
			<div className='relative mb-[20px]'>
				<div className='flex items-center gap-[20px] justify-center border-2 border-primary bg-[rgba(76,76,76,0.5)] py-[23px] px-[21px] rounded-[20px] relative z-10'>
					<div className='flex flex-col items-center justify-center'>
						<div className='rounded-full border border-primary size-[71px] shadow-[0px_-4px_4px_0px_#C9A86B] relative'>
							{bet.event.teams[0].team.id !== bet.event.won && (
								<div className='absolute inset-0 bg-red-800/60 p-[1px] rounded-full' />
							)}

							<img
								src={bet.event.teams[0].team.logo_url}
								className='rounded-full'
								style={
									bet.event.teams[0].id === bet.event_team_id
										? {
												boxShadow:
													'0px 4px 4px 0px #FF0000, 0px -4px 4px 0px #C9A86B'
										  }
										: {}
								}
							/>
						</div>
						<div className='font-medium text-[15px] text-center'>
							{bet.event.teams[0].team.name}
						</div>
						<div className='text-[12px]'>{percentTeam1}</div>
					</div>
					<div className='flex flex-col gap-[3px] text-[12px]'>
						<div className='relative border border-[rgba(76,76,76,1)] flex items-center justify-between gap-[10px] rounded-[20px]  py-[5px] bg-[rgba(44,44,44,1)]'>
							<div className='w-[40px] text-center'>
								{bet.event.teams[0].total_coin}
							</div>
							<div className='w-[1px] h-[10px] rounded-[10px] bg-[rgba(76,76,76,1)]'></div>
							<div className='w-[40px] text-center'>
								{bet.event.teams[0].total_usdt}
							</div>
							<div className='absolute left-1/2 -translate-x-1/2 -top-3'>
								<CoinIcon />
							</div>
						</div>
						<div className='relative border border-[rgba(76,76,76,1)] flex items-center justify-between gap-[10px] rounded-[20px]  py-[5px] bg-[rgba(44,44,44,1)]'>
							<div className='w-[40px] text-center'>
								{bet.event.teams[1].total_coin}
							</div>
							<div className='w-[1px] h-[10px] rounded-[10px] bg-[rgba(76,76,76,1)]'></div>
							<div className='w-[40px] text-center'>
								{bet.event.teams[1].total_coin}
							</div>
							<div className='absolute left-1/2 -translate-x-1/2 -top-3'>
								<TetherIcon />
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<div className=' rounded-full border border-primary size-[71px] relative'>
							{bet.event.teams[1].team.id !== bet.event.won && (
								<div className='absolute inset-0 bg-red-800/60 p-[1px] rounded-full' />
							)}
							<img
								src={bet.event.teams[1].team.logo_url}
								className='rounded-full'
								style={
									bet.event.teams[1].id === bet.event_team_id
										? {
												boxShadow:
													'0px 4px 4px 0px #FF0000, 0px -4px 4px 0px #C9A86B'
										  }
										: {}
								}
							/>
						</div>
						<div className='font-medium text-[15px] text-center'>
							{bet.event.teams[1].team.name}
						</div>
						<div className='text-[12px]'>{percentTeam2}</div>
					</div>
				</div>
				<div className='border-2 border-primary px-[12px] rounded-[15px] absolute left-1/2 -translate-x-1/2 -top-7 bg-[rgba(44,44,44,1)] z-20'>
					<div className='text-[32px] text-center font-semibold'>
						{bet.event.teams[0].score}:{bet.event.teams[1].score}
					</div>
				</div>
				<div className='absolute border border-primary rounded-[15px] bg-[rgba(44,44,44,1)] text-[12px] text-center px-[40px] -bottom-2 left-1/2 -translate-x-1/2 text-primary z-20 w-[60%]'>
					{formatToUserTimezone(bet.event.date_start)}
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
					<div className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[20px] pb-[12px] relative z-40'>
						<div className='text-[12px] font-medium text-primary'>
							Ваша ставка
						</div>
						<div
							className={`text-[15px] font-medium flex justify-between ${
								isWon ? 'text-green-400' : 'text-red-400'
							}`}>
							<div>{getBetType(betType)} </div>
							{betType === 'winner_first_card' ||
							betType === 'winner_second_card' ||
							betType === 'win' ? (
								<div>
									{
										bet.event.teams.find(team => team.id === bet.event_team_id)
											?.team.name
									}
								</div>
							) : (
								<div>{bet.bet ? 'Да' : 'Нет'}</div>
							)}
						</div>
						<div className='mt-[10px]'></div>
					</div>
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

import { CoinIcon } from '../icons/CoinIcon'
import { TetherIcon } from '../icons/TetherIcon'
import { formatToUserTimezone } from '../utils/formatToUserTimezone'

interface BetItem2Props {
	bet: IEvent
	selectedTeamId: number | null
	setSelectedTeamId: (teamId: number) => void
}

export const BetItem2 = ({
	bet,
	selectedTeamId,
	setSelectedTeamId
}: BetItem2Props) => {
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
				<div className='flex items-center gap-[20px] justify-center border-2 border-primary bg-[rgba(76,76,76,0.5)] py-[23px] px-[21px] rounded-[20px] relative z-10'>
					<div className='flex flex-col items-center justify-center'>
						<div
							onClick={() => setSelectedTeamId(bet.teams[0].team.id)}
							className='cursor-pointer rounded-full border border-primary size-[71px] shadow-[0px_-4px_4px_0px_#C9A86B] relative'>
							<img
								src={bet.teams[0].team.logo_url}
								className='rounded-full'
								style={
									selectedTeamId === bet.teams[0].team.id
										? {
												boxShadow:
													'0px 4px 4px 0px #FF0000, 0px -4px 4px 0px #C9A86B'
										  }
										: {}
								}
							/>
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
						<div
							onClick={() => setSelectedTeamId(bet.teams[1].team.id)}
							className='cursor-pointer rounded-full border border-primary size-[71px] relative'>
							<img
								src={bet.teams[1].team.logo_url}
								className='rounded-full'
								style={
									selectedTeamId === bet.teams[1].team.id
										? {
												boxShadow:
													'0px 4px 4px 0px #FF0000, 0px -4px 4px 0px #C9A86B'
										  }
										: {}
								}
							/>
						</div>
						<div className='font-medium text-[15px] text-center'>
							{bet.teams[1].team.name}
						</div>
						<div className='text-[12px]'>{percentTeam2}%</div>
					</div>
				</div>
				<div className='border-2 border-primary px-[12px] rounded-[15px] absolute left-1/2 -translate-x-1/2 -top-7 bg-[rgba(44,44,44,1)] z-20'>
					<div className='text-[32px] text-center font-semibold'>
						{bet.teams[0].score}:{bet.teams[1].score}
					</div>
				</div>
				<div className='absolute border border-primary rounded-[15px] bg-[rgba(44,44,44,1)] text-[12px] text-center px-[40px] -bottom-2 left-1/2 -translate-x-1/2 text-primary z-20 w-[60%]'>
					{formatToUserTimezone(bet.date_start)}
				</div>
			</div>
		</div>
	)
}

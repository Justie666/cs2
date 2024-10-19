import { useNavigate, useParams } from 'react-router-dom'
import { Balance } from '../components/Balance'
import { CloseIcon } from '../icons/CloseIcon'
import { useState } from 'react'
import { TetherIcon } from '../icons/TetherIcon'
import { CoinIcon } from '../icons/CoinIcon'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useGetBetById, usePostBet } from '../api/hooks/betHooks'
import { BetItem2 } from '../components/BetItem2'
import { SemiDrawer } from '../components/SemiDrawer'

export const BetPage = () => {
	const { type, id } = useParams()
	const [amount, setAmount] = useState(0)
	const [selectedTeam, setSelectedTeam] = useState<number | null>(null)
	const [selectedCurrency, setSelectedCurrency] = useState<'coin' | 'usdt'>(
		'usdt'
	)
	const [isOpen, setIsOpen] = useState(false)

	const { mutate } = usePostBet()

	const [bet, setBet] = useState(true)

	const navigate = useNavigate()

	const { data } = useGetBetById(Number(id))

	const isYesNo = type === 'knife' || type === 'score'

	const handleClick = () => {
		let bet_type = 'win' as BetType

		if (type === 'knife') {
			bet_type = 'knife'
		} else if (type === 'score') {
			bet_type = 'dry_bill'
		} else if (type === 'win') {
			bet_type = 'win'
		} else if (type === 'map1') {
			bet_type = 'winner_first_card'
		} else if (type === 'map2') {
			bet_type = 'winner_second_card'
		}

		mutate({
			amount: amount,
			bet: bet,
			currency: selectedCurrency,
			bet_type: bet_type,
			event_id: Number(id),
			event_team_id: isYesNo ? null : selectedTeam
		})
	}

	return (
		<>
			<div className='pt-[20px] pb-[40px] px-[15px] min-h-screen flex flex-col'>
				<div className='flex-1'>
					<div className='flex items-center justify-between'>
						<div>
							<Balance />
						</div>
						<div className='cursor-pointer' onClick={() => navigate(-1)}>
							<CloseIcon />
						</div>
					</div>
					<div className='mt-[32px] text-[32px] font-semibold text-primary text-center'>
						{type === 'win' && 'Победа'}
						{type === 'map1' && 'Победа в первой карте'}
						{type === 'map2' && 'Победа во второй карте'}
						{type === 'score' && 'Сухой счёт по картам'}
						{type === 'knife' && 'Будет ли нож'}
					</div>

					<div className='mt-[30px]'>
						{data && (
							<BetItem2
								selectedTeamId={selectedTeam}
								setSelectedTeamId={setSelectedTeam}
								bet={data}
							/>
						)}
					</div>

					{isYesNo && (
						<div className='flex gap-2'>
							<Button isOrange={bet} onClick={() => setBet(true)}>
								Да
							</Button>
							<Button isOrange={!bet} onClick={() => setBet(false)}>
								Нет
							</Button>
						</div>
					)}

					<div className='mt-[40px] flex items-center justify-between'>
						<div className='text-[20px] font-bold text-primary'>
							Сумма ставки:
						</div>
						<div className='flex items-center gap-2'>
							<div
								onClick={() => setSelectedCurrency('usdt')}
								className={`cursor-pointer size-[36px] rounded-[10px] flex items-center justify-center ${
									selectedCurrency === 'usdt'
										? 'bg-[#4C4C4C]'
										: 'shadow-[0_0_4px_0_#000_inset,0_4px_4px_0_#00000040]'
								}`}>
								<TetherIcon />
							</div>
							<div
								onClick={() => setSelectedCurrency('coin')}
								className={`cursor-pointer size-[36px] rounded-[10px] flex items-center justify-center ${
									selectedCurrency === 'coin'
										? 'bg-[#4C4C4C]'
										: 'shadow-[0_0_4px_0_#000_inset,0_4px_4px_0_#00000040]'
								}`}>
								<CoinIcon />
							</div>
						</div>
					</div>
					<div className='mt-[13px]'>
						<Input
							type='number'
							value={amount}
							onChange={e => setAmount(+e.target.value)}
						/>
					</div>
				</div>
				<div className='mt-[20px]'>
					<Button
						onClick={() => setIsOpen(true)}
						disabled={amount === 0}
						isOrange={amount > 0}>
						Сделать ставку
					</Button>
				</div>
			</div>
			<SemiDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<div className='mt-[50px] font-semibold text-[32px] text-center text-primary'>
					Предупреждение
				</div>
				<div className='text-center mt-[20px] text-[20px] font-medium'>
					Отменить и изменить ставку потом будет нельзя.{' '}
				</div>
				<div className='mt-[30px]'>
					<Button onClick={() => handleClick()} isOrange>
						Сделать ставку
					</Button>
				</div>
			</SemiDrawer>
		</>
	)
}

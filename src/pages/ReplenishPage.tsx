import {
	SendTransactionRequest,
	TonConnectButton,
	useTonConnectUI
} from '@tonconnect/ui-react'
import { Drawer } from '../components/Drawer'
import { Input } from '../components/Input'
import { useState } from 'react'
import { Button } from '../components/Button'
import { toast } from 'sonner'
import { useGetUserMain, usePathCoins } from '../api/hooks/userHooks'
import { getTonPrice } from '../api/getTonPrice'
import { TetherIcon } from '../icons/TetherIcon'
import { apiService } from '../api/services/apiService'

export const ReplenishPage = () => {
	const [tonConnectUI] = useTonConnectUI()
	const [value, setValue] = useState(1)
	const { data: user } = useGetUserMain()

	const { mutate } = usePathCoins()
	const handleClick = async () => {
		const wallet = await apiService.get()
		if (!tonConnectUI.connected) {
			toast.error('Подключите кошелек')
			return
		}

		if (!Number.isInteger(value) || value < 1) {
			toast.error('Введите целое число больше или равное 1')
			return
		}

		const tonPrice = await getTonPrice()

		const transaction: SendTransactionRequest = {
			validUntil: Date.now() + 5 * 60 * 1000,
			messages: [
				{
					address: wallet,
					amount: Math.ceil(value * (1 / tonPrice) * 10 ** 9).toString()
				}
			]
		}

		try {
			await tonConnectUI.sendTransaction(transaction)

			toast.success('Вы успешно пополнили кошелёк')
			mutate({ value: value })
		} catch {
			toast.error(`Ошибка при отправке транзакции`)
		}
	}

	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[20px] font-semibold'>
						Пополнить
					</div>
				}>
				<div className='flex items-center justify-center mt-5 gap-3 justify-between'>
					<TonConnectButton />
					<div className='shadow-inset-custom rounded-full pl-1 h-[40px] pr-3 flex items-center gap-[6px]'>
						<TetherIcon />
						<div className='font-medium text-[20px]'>
							{user?.balance_usdt || 0}
						</div>
					</div>
				</div>
				<div className='mt-5'>
					<Input
						type='number'
						value={value}
						onChange={e => setValue(+e.target.value)}
					/>
				</div>
				<div className='mt-5'>
					<Button
						disabled={value === 0}
						isOrange={value !== 0}
						onClick={() => handleClick()}>
						Пополнить
					</Button>
					<div className='text-center text-primary text-[12px] mt-2'>
						Введите сумму в USDT целым числом, оплата в TON, но на баланс бота
						будет переконсервированно в USDT
					</div>
				</div>
			</Drawer>
		</div>
	)
}

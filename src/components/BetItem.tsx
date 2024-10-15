import { useState } from 'react'
import { ArrowDownIcon2 } from '../icons/ArrowDownIcon2'
import { CoinIcon } from '../icons/CoinIcon'
import { TetherIcon } from '../icons/TetherIcon'

export const BetItem = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<div className='relative'>
				<div className='flex items-center gap-[20px] justify-center border-2 border-primary bg-[rgba(76,76,76,0.5)] py-[23px] px-[21px] rounded-[20px] relative z-10'>
					<div className='flex flex-col items-center justify-center'>
						<div className=' rounded-full border border-primary size-[71px]'></div>
						<div className='font-medium text-[15px]'>teamxxxxx</div>
						<div className='text-[12px]'>70%</div>
					</div>
					<div className='flex flex-col gap-[3px] text-[12px]'>
						<div className='relative border border-[rgba(76,76,76,1)] flex items-center justify-between gap-[10px] rounded-[20px]  py-[5px] bg-[rgba(44,44,44,1)]'>
							<div className='w-[40px] text-center'>5к</div>
							<div className='w-[1px] h-[10px] rounded-[10px] bg-[rgba(76,76,76,1)]'></div>
							<div className='w-[40px] text-center'>405к</div>
							<div className='absolute left-1/2 -translate-x-1/2 -top-3'>
								<CoinIcon />
							</div>
						</div>
						<div className='relative border border-[rgba(76,76,76,1)] flex items-center justify-between gap-[10px] rounded-[20px]  py-[5px] bg-[rgba(44,44,44,1)]'>
							<div className='w-[40px] text-center'>5к</div>
							<div className='w-[1px] h-[10px] rounded-[10px] bg-[rgba(76,76,76,1)]'></div>
							<div className='w-[40px] text-center'>45к</div>
							<div className='absolute left-1/2 -translate-x-1/2 -top-3'>
								<TetherIcon />
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<div className=' rounded-full border border-primary size-[71px]'></div>
						<div className='font-medium text-[15px]'>teamxxxxx</div>
						<div className='text-[12px]'>70%</div>
					</div>
				</div>
				<div className='border-2 border-primary px-[12px] rounded-[15px] absolute left-1/2 -translate-x-1/2 -top-7 bg-[rgba(44,44,44,1)] z-20'>
					<div className='text-[32px] text-center font-semibold'>15</div>
					<div className='text-[12px] text-center text-primary -mt-3'>
						08.2024
					</div>
				</div>
				<div className='absolute border border-primary rounded-[15px] bg-[rgba(44,44,44,1)] text-[12px] text-center px-[40px] -bottom-2 left-1/2 -translate-x-1/2 text-primary z-20'>
					01: 12: 00: 28
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
			<div className='flex flex-col gap-[5px] mt-[26px]'>
				<div className='bg-[rgba(76,76,76,1)] rounded-[17px] pt-[12px] px-[14px] pb-[17px]'>
					<div className='text-[15px] text-center font-medium'>
						Сухой счет по картам
					</div>
					<div className='mt-[10px]'></div>
				</div>
			</div>
		</div>
	)
}

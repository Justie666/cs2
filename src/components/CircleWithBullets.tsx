import { WhiteBulletIcon } from '../icons/WhiteBulletIcon'

export const CircleWithBullets = () => {
	return (
		<div className='size-[310px] left-1/2 -translate-x-1/2 -bottom-28 absolute z-20 bg-bgColor rounded-full shadow-[inset_3px_3px_27.6px_#000000CC] flex items-center justify-center'>
			<div className='rounded-full bg-[#000] shadow-[0px_-4px_4px_0px_#C9A86B] size-[220px] flex justify-center items-start pt-[35px]'>
				<div className='relative flex items-center gap-2'>
					<WhiteBulletIcon />
					<div className='font-bold text-[20px]'>10</div>
				</div>
			</div>
		</div>
	)
}

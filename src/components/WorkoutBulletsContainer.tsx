import { WhiteBulletIcon } from '../icons/WhiteBulletIcon'

interface IWorkoutBulletsContainer {
	bullets: number
}

export const WorkoutBulletsContainer = ({
	bullets
}: IWorkoutBulletsContainer) => {
	return (
		<div className='flex flex-col items-center w-full'>
			<div className='rounded-[18px] py-[5px] px-2 bg-[#4C4C4C] shadow-[inset_0px_3px_4px_0px_#000000,_0px_4px_4px_0px_rgba(0,0,0,0.25)] flex gap-2 items-center'>
				<WhiteBulletIcon />
				<div className='text-[32px] font-semibold'>
					{bullets.toString().padStart(2, '0')}
				</div>
			</div>
		</div>
	)
}

import { Link } from 'react-router-dom'
import { Drawer } from '../components/Drawer'
import { QuestionIcon } from '../icons/QuestionIcon'
import { ProfileLink } from '../components/ProfileLink'
import { StatsIcon } from '../icons/StatsIcon'
import { SkinIcon } from '../icons/SkinIcon'
import { RefIcon } from '../icons/RefIcon'
import { BetsIcon } from '../icons/BetsIcon'
import { SettingsIcon } from '../icons/SettingsIcon'
import { useGetUserFull } from '../api/hooks/userHooks'

export const ProfilePage = () => {
	useGetUserFull()

	return (
		<div className=''>
			<Drawer
				leftSideContent={
					<Link
						to={'/info'}
						className='block size-[44px] rounded-full shadow-[inset_0px_4px_4px_0px_#FFFFFF40]'>
						<div className='w-full h-full rounded-full flex items-center justify-center shadow-[0px_1px_2px_1px_#000000]'>
							<QuestionIcon />
						</div>
					</Link>
				}>
				<div className='size-[270px] mx-auto'>
					<img
						src='https://www.svgrepo.com/show/81103/avatar.svg'
						alt='avatar'
						className='rounded-full object-cover mx-auto border-[3px] border-primary'
					/>
					<div className='mt-[15px] text-[32px] font-semibold text-center'>
						userxxxxxxxx
					</div>
				</div>
				<div className='relative mt-[150px] aspect-square w-full rounded-full bg-bgColor shadow-[inset_1px_14px_30px_0px_#0000001A,_inset_4px_55px_55px_0px_#00000017,_inset_10px_123px_74px_0px_#0000000D,_inset_18px_218px_88px_0px_#00000003,_inset_28px_341px_96px_0px_#00000000] mx-auto'>
					<div className='relative -top-9'>
						<div className='relative mt-[100px]'>
							<Link
								to={'/settings'}
								className='bg-bgColor shadow-[inset_0px_4px_4px_0px_#FFFFFF40,_0px_1px_2px_1px_#000000] size-[68px] flex items-center justify-center rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
								<SettingsIcon />
							</Link>
							<div className='flex items-center gap-[32px] mb-[32px] justify-center'>
								<ProfileLink
									to='/stats'
									svg={<StatsIcon />}
									title='Статистика'
								/>
								<ProfileLink to='/my-skins' svg={<SkinIcon />} title='Скины' />
							</div>
							<div className='flex items-center gap-[32px] justify-center'>
								<ProfileLink
									to='/referrals'
									svg={<RefIcon />}
									title='Рефералы'
								/>
								<ProfileLink to='/my-bets' svg={<BetsIcon />} title='Ставки' />
							</div>
						</div>
					</div>
				</div>
			</Drawer>
		</div>
	)
}

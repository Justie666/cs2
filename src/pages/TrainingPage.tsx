import {CoinIcon} from "../icons/CoinIcon.tsx";
import {TetherIcon} from "../icons/TetherIcon.tsx";
import {useState} from "react";
import {BulletsIcon} from "../icons/BulletsIcon.tsx";
import {Button} from "../components/Button.tsx";
import WorkoutBulletsContainer from "../components/WorkoutBulletsContainer.tsx";
import {useNavigate} from "react-router-dom";

const TrainingPage = () => {
    const [isOpenWorkout, setIsOpenWorkout] = useState<boolean>(false)
    const [isStartWorkout, setIsStartWorkout] = useState<boolean>(false)
    const [bullets, setBullets] = useState<number[]>([10, 10, 10])

    const navigate = useNavigate()

    const handleOpenWorkout = () => {
        setIsOpenWorkout(true)
    }

    const handleStartWorkout = () => {
        setIsStartWorkout(true)
        setIsOpenWorkout(false)
    }

    const handleEndWorkout = () => {
        setIsStartWorkout(false)
        setIsOpenWorkout(false)
        navigate('/')
    }

    const handleDecreaseBullets = () => {
        setBullets(prevBullets => {
            const newBullets = [...prevBullets]
            const index = newBullets.findIndex(count => count > 0)

            if (index !== -1) {
                newBullets[index] -= 1
            }

            if(newBullets.every(count => count === 0)) {
               handleEndWorkout()
            }

            return newBullets

        })
    }

    return (
        <div className='relative container px-5 pt-4 flex flex-col min-h-screen z-10 overflow-hidden items-center'>
            <div className='w-11/12 h-[79px] flex items-center justify-center rounded-[27px] shadow-inset-custom z-20 bg-bgColor'>
                <div className='flex items-center justify-center gap-[30px]'>
                    <div className='shadow-inset-custom rounded-full px-2 flex items-center gap-[6px]'>
                        <CoinIcon/>
                        <div className='font-medium text-[20px]'>321</div>
                    </div>
                    <div className='shadow-inset-custom rounded-full px-2 flex items-center gap-[6px]'>
                        <TetherIcon/>
                        <div className='font-medium text-[20px]'>321</div>
                    </div>
                </div>
            </div>
            {!isStartWorkout && (
                !isOpenWorkout ? (
                    <div>
                        <img
                            src={'/Rectangle 133.png'}
                            alt={''}
                            className="w-full h-[50%] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-primary border-4 transition-all duration-100 ease-out scale-100 opacity-100"
                        />
                        <img
                            src={'/workout.png'}
                            alt={''}
                            className="w-[249px] h-[230px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-out"
                            onClick={handleOpenWorkout}
                        />
                    </div>
                ) : (
                    <div className='w-full'>
                        <img
                            src={'/Training-is-all-move.png'}
                            alt={''}
                            className="w-full h-[72%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out scale-100 opacity-100"
                        />
                        <img
                            src={'/workout.png'}
                            alt={''}
                            className="w-[249px] h-[230px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-in"
                            onClick={handleStartWorkout}
                        />
                    </div>
                )
            )}

            {isStartWorkout && (
                <img
                    src={'/background.png'}
                    alt={''}
                    className="w-full h-[72%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-primary border-4 rounded-[77px] z-0"
                    onClick={handleDecreaseBullets}
                />
            )}
            <div className='flex items-center justify-between w-[81%] gap-[22px] absolute bottom-[140px] z-40'>
                <WorkoutBulletsContainer bullets={bullets}/>
            </div>

            <Button
                children={'Завершить тренировку'}
                isOrange={true}
                className='bg-custom-radial text-[#000] text-[15px] font-medium w-[78%] py-2 rounded-[8px] z-30 absolute bottom-[100px]'
                onClick={handleEndWorkout}
            />

            <div
                className='size-[310px] left-1/2 -translate-x-1/2 -bottom-28 absolute z-20 bg-bgColor rounded-full shadow-[inset_3px_3px_27.6px_#000000CC] flex items-center justify-center'>
                <div
                    className='rounded-full bg-[#000] shadow-[0px_-4px_4px_0px_#C9A86B] size-[220px] flex justify-center items-start pt-[35px]'>
                    <div className='flex items-center gap-3'>
                        <BulletsIcon/>
                        <BulletsIcon/>
                        <BulletsIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
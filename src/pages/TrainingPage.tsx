import {CoinIcon} from "../icons/CoinIcon.tsx";
import {TetherIcon} from "../icons/TetherIcon.tsx";
import {useState} from "react";

const TrainingPage = () => {
    const [isOpenWorkout, setIsOpenWorkout] = useState<boolean>(false)
    const [isStartWorkout, setIsStartWorkout] = useState<boolean>(false)

    const handleOpenWorkout = () => {
        setIsOpenWorkout(true)
    }

    const handleStartWorkout = () => {
        setIsStartWorkout(true)
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
            {!isOpenWorkout ? (
                <div>
                    <img
                        src={'/Rectangle 133.png'}
                        alt={''}
                        className="w-full h-[458px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-primary border-4 transition-all duration-100 ease-out scale-100 opacity-100"
                    />
                    <img
                        src={'/workout.png'}
                        alt={''}
                        className="w-[249px] h-[230px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-out"
                        onClick={handleOpenWorkout}
                    />
                </div>
            ) : (
                <div>
                    <img
                        src={'/Training-is-all-move.png'}
                        alt={''}
                        className="w-full h-[688px] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out scale-100 opacity-100"
                    />
                    <img
                        src={'/workout.png'}
                        alt={''}
                        className="w-[249px] h-[230px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-in"
                        onClick={handleStartWorkout}
                    />
                </div>
            )}
            {isStartWorkout ?
                <img
                src={'/background.png'}
                alt={''}
                className="w-full h-[688px] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-primary border-4 rounded-[77px] z-0"
            /> :
                null}
        </div>
    );
};

export default TrainingPage;
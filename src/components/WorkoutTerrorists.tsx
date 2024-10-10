import {useEffect, useState} from "react";

const workoutTerrorists = [
    { src: '/t dance.png', top: '14%', left: '1%' },
    { src: '/t knife.png', top: '30%', left: '45%' },
    { src: '/t radio.png', top: '35%', left: '10%' },
    { src: '/t trap.png', top: '10%', left: '30%' },
]

interface IWorkoutTerroristsProps {
    handleDecreaseBullets: () => void

}
const WorkoutTerrorists = ({ handleDecreaseBullets }: IWorkoutTerroristsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)



    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true)

            setTimeout(() => {
                setIsVisible(false)
                setCurrentIndex(prevIndex => (prevIndex + 1) % workoutTerrorists.length)
            }, 3000)
        }, 4000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <img
                src={'/background.png'}
                alt={''}
                className="w-full h-[72%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
                border-primary border-4 rounded-[77px] z-0"
                onClick={handleDecreaseBullets}
                />
                {isVisible && (
                    <img
                        src={workoutTerrorists[currentIndex].src}
                        alt=""
                        style={{
                            top: workoutTerrorists[currentIndex].top,
                            left: workoutTerrorists[currentIndex].left,
                        }}
                        className={`absolute w-[240px] h-[260px] transition-opacity duration-500 ease-in-out z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
        </div>
    );
};

export default WorkoutTerrorists;
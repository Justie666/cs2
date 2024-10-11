import WorkoutBullets from "./WorkoutBullets.tsx";

interface IWorkoutBulletsContainer {
    bullets: number[]
}

const WorkoutBulletsContainer = ({ bullets }: IWorkoutBulletsContainer) => {

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center gap-[22px] ">
                {bullets.map((count: number, index: number) => (
                    <WorkoutBullets key={index} bulletsCount={count} />
                ))}
            </div>
        </div>
    );
};

export default WorkoutBulletsContainer;
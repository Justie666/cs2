import {BulletsIcon} from "../icons/BulletsIcon.tsx";

interface IWorkoutBulletsProps {
    bulletsCount: number
}

const WorkoutBullets = ({ bulletsCount }: IWorkoutBulletsProps) => {
    return (
            <div className='z-50 flex justify-center items-center bg-[#4C4C4C] w-[90px] h-[62px] shadow-inset-black rounded-[18px] gap-[3px]'>
                {bulletsCount ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#00000">
                        <path d="M20.3333 15.4091H11.6667V29H20.3333V15.4091Z" fill="#F1FAEE"/>
                        <path
                            d="M20.3333 14.2273H11.6667L13.1111 12.8977C12.9506 8.95833 14.5356 2.99997 16 3C17.6852 3.00003 19.0494 10.2386 18.8889 12.8977L20.3333 14.2273Z"
                            fill="#F1FAEE"/>
                        <path d="M29 15.4091H21.9091V29H29V15.4091Z" fill="#F1FAEE"/>
                        <path
                            d="M29 14.2273H21.9091L23.0909 12.8977C22.9596 8.95833 24.2564 2.99997 25.4545 3C26.8333 3.00003 27.9495 10.2386 27.8182 12.8977L29 14.2273Z"
                            fill="#F1FAEE"/>
                        <path d="M10.0909 15.4091H3V29H10.0909V15.4091Z" fill="#F1FAEE"/>
                        <path
                            d="M10.0909 14.2273H3L4.18182 12.8977C4.05051 8.95833 5.34733 2.99997 6.54545 3C7.92424 3.00003 9.0404 10.2386 8.90909 12.8977L10.0909 14.2273Z"
                            fill="#F1FAEE"/>
                    </svg>
                    : <BulletsIcon/>
                }
                <span className="text-[32px]">{bulletsCount}</span>
            </div>
    );
};

export default WorkoutBullets;
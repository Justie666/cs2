import {CoinIcon} from "../icons/CoinIcon.tsx";
import {TetherIcon} from "../icons/TetherIcon.tsx";

const Balance = () => {
    return (
        <>
            <div className='shadow-inset-custom rounded-full px-2 flex items-center gap-[6px]'>
                <CoinIcon/>
                <div className='font-medium text-[20px]'>321</div>
            </div>
            <div className='shadow-inset-custom rounded-full px-2 flex items-center gap-[6px]'>
                <TetherIcon/>
                <div className='font-medium text-[20px]'>321</div>
            </div>
        </>
)
    ;
};

export default Balance;
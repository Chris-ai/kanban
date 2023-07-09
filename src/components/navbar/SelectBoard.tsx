'use client'
import React, {useState} from "react";
import ArrowUp from '@/assets/icon-chevron-up.svg';
import ArrowDown from '@/assets/icon-chevron-down.svg';
import Image from 'next/image'
import Button from "@/components/common/Button";
import SelectBoardDialog from "@/components/dialog/SelectBoardDialog";


interface SelectProps {
    value: string,
    dashboards: string[]
}

const SelectBoard: React.FC<SelectProps> = ({value, dashboards}) => {
    const [active, setActive] = useState<boolean>(false);

    const openBoardsMenu = () => {
        setActive(!active);
    }
    
    return (
        <>
            <div className={'flex justify-between items-center'}>
                <p className={'max-w-[180px] line-clamp-1'}>{value}</p>
                <Button appearance={'transparent'} type={'icon'} onClick={openBoardsMenu}>
                    {!active ?
                        <Image src={ArrowDown} alt={'arrow-down'} width={8} height={4}/>
                        :
                        <Image src={ArrowUp} alt={'arrow-up'} width={8} height={4}/>
                    }
                </Button>

            </div>
            {active && <SelectBoardDialog isOpen={active} onClose={openBoardsMenu} boards={dashboards}/>}
        </>
    )
}

export default SelectBoard;
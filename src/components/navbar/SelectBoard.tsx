'use client'
import React, {useEffect, useState} from "react";
import ArrowUp from '@/assets/icon-chevron-up.svg';
import ArrowDown from '@/assets/icon-chevron-down.svg';
import Image from 'next/image'
import Button from "@/components/common/Button";
import SelectBoardDialog from "@/components/dialog/SelectBoardDialog";
import {setCookie} from "typescript-cookie";
import {CURRENT_BOARD_COOKIE_NAME} from "@/model/cookies/types";

interface SelectProps {
    value: string,
    dashboards: string[]
}

const SelectBoard: React.FC<SelectProps> = ({value, dashboards}) => {
    const [active, setActive] = useState<boolean>(false);
	const [activeBoard, setActiveBoard] = useState<string>(value);

    const openBoardsMenu = () => {
        setActive(!active);
    }

	const changeBoard = (value: string) => {
		setCookie(CURRENT_BOARD_COOKIE_NAME, value);
		setActiveBoard(value);
		setActive(false);
	}

	useEffect(() => {}, [value]);

    return (
        <>
            <div className={'flex justify-between items-center'}>
                <p className={'max-w-[180px] line-clamp-1'}>{activeBoard}</p>
                <Button appearance={'transparent'} type={'icon'} onClick={openBoardsMenu}>
                    {!active ?
                        <Image src={ArrowDown} alt={'arrow-down'} width={8} height={4} />
                        :
                        <Image src={ArrowUp} alt={'arrow-up'} width={8} height={4}/>
                    }
                </Button>

            </div>
            {active && <SelectBoardDialog isOpen={active} onClose={openBoardsMenu} boards={dashboards} onBoardChange={changeBoard}/>}
        </>
    )
}

export default SelectBoard;
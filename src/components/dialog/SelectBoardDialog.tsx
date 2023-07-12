'use client'
import React, {useState} from "react";
import {Dialog } from "@headlessui/react";
import Image from "next/image";
import ProjectIcon from "@/assets/icon-board.svg";
import LightModeIcon from "@/assets/icon-light-theme.svg";
import DarkModeIcon from "@/assets/icon-dark-theme.svg";
import Button from "@/components/common/Button";
import useLocalization from "@/hooks/useLocalization";
import cn from "classnames";
import * as Switch from '@radix-ui/react-switch';
import CustomDialog from "@/components/dialog/CustomDialog";
import BoardIcon from "@/components/icons/BoardIcon";

interface SelectBoardDialogProps {
    isOpen: boolean,
    onClose: () => void,
    boards: string[]
}

interface BoardButtonElementProps {
    board: string,
    changeBoard: () => void,
    className?: string
}

const BoardButtonElement: React.FC<BoardButtonElementProps> = ({board, changeBoard, className}) => {
    return (
        <Button appearance={'transparent'} onClick={changeBoard} className={'flex items-center flex-nowrap gap-3 pl-6 py-3.5 rounded-r-full group/element sm:hover:bg-main-purple duration-300 transition ease-in-out'}>
            <BoardIcon isActive={false} className={'group-hover/element:fill-white'}/>
			{/*<Image src={ProjectIcon} alt={'board-icon'} className={'text-main-purple'} height={16} width={16}/>*/}
            <p className={cn('text-center flex whitespace-nowrap overflow-ellipsis truncate heading-m sm:group-hover/element:text-white duration-300 transition ease-in-out', className)}>{board}</p>
        </Button>
    )
}

const SelectBoardDialog: React.FC<SelectBoardDialogProps> = ({isOpen, onClose, boards}) => {
    const {t} = useLocalization();
    const [enabled, setEnabled] = useState(false);

    return (
		<CustomDialog isOpen={isOpen} onClose={onClose}>
			<div className={'bg-dark-grey rounded-lg w-[263px] flex flex-col'}>
				<h1 className={'leading-lg text-md font-bold uppercase text-medium-grey pl-6 pt-4'}>{`${t('allBoards')} (${boards.length})`}</h1>
				{boards.map((board: string) => <BoardButtonElement key={board} board={board} changeBoard={onClose} className={'text-medium-grey'}/>)}
				<BoardButtonElement board={t('createNewBoard')} className={'text-main-purple'} changeBoard={() => console.log('create board')} />
				<div className={'w-[90%] bg-very-dark-grey rounded-md h-12 self-center my-4 flex justify-center items-center gap-x-6'}>
					<Image src={LightModeIcon} alt={'light-mode-icon'} height={19} width={19}/>
					<Switch.Root
						className="w-[40px] h-[20px] bg-main-purple rounded-full relative aria-checked:bg-main-purple outline-none cursor-default"
						id="airplane-mode"
					>
						<Switch.Thumb className="block w-[14px] h-[14px] bg-white rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[22px]" />
					</Switch.Root>
					<Image src={DarkModeIcon} alt={'dark-mode-icon'} height={19} width={19}/>
				</div>
			</div>
		</CustomDialog>
    )
}

export default SelectBoardDialog;
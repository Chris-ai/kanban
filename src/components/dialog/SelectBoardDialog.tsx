'use client'
import React, {useState} from "react";
import {Dialog} from "@headlessui/react";
import Image from "next/image";
import LightModeIcon from "@/assets/icon-light-theme.svg";
import DarkModeIcon from "@/assets/icon-dark-theme.svg";
import Button from "@/components/common/Button";
import useLocalization from "@/hooks/useLocalization";
import cn from "classnames";
import * as Switch from '@radix-ui/react-switch';
import BoardIcon from "@/components/icons/BoardIcon";
import AddNewBoardDialog from "@/components/dialog/AddNewBoardDialog";
import {setCookie} from "typescript-cookie";

interface SelectBoardDialogProps {
	isOpen: boolean,
	onClose: () => void,
	boards: string[],
	onBoardChange: (value: string) => void
}

interface BoardButtonElementProps {
	board: string,
	className?: string,
	changeBoard?: (value: string) => void
	createBoard?: () => void
}

const BoardButtonElement: React.FC<BoardButtonElementProps> = ({board, className, changeBoard, createBoard}) => {
	const handleOnClick = () => {
		if(changeBoard) {
			changeBoard(board)
		} else if(createBoard){
			createBoard()
		}
	}

	return (
		<Button appearance={'transparent'} onClick={handleOnClick}
				className={'flex items-center flex-nowrap gap-3 pl-6 py-3.5 rounded-r-full group/element sm:hover:bg-main-purple duration-300 transition ease-in-out'}>
			<BoardIcon isActive={false} className={'group-hover/element:fill-white'}/>
			<p className={cn(
				'text-center flex whitespace-nowrap overflow-ellipsis truncate heading-m sm:group-hover/element:text-white duration-300 transition ease-in-out',
				className)}>{board}</p>
		</Button>
	)
}

const SelectBoardDialog: React.FC<SelectBoardDialogProps> = ({isOpen, onClose, boards, onBoardChange}) => {
	const {t} = useLocalization();
	const [enabled, setEnabled] = useState(false); //TODO:: This is possible to change theme of the app - later
	const [isCreateNewBoardDialogOpen, setIsCreateNewBoardDialogOpen] = useState(false);

	const createNewBoard = () => {
		//TODO: This is not working perfectly :)
		onClose();
		setTimeout(() => {
			setIsCreateNewBoardDialogOpen(true);
		}, 300)
	}

	return (
		<>
			<Dialog open={isOpen} onClose={onClose}>
				<div className="fixed inset-0 bg-black/30 flex items-center justify-center" aria-hidden="true">
					<Dialog.Panel>
						<div className={'bg-dark-grey rounded-lg w-[263px] flex flex-col'}>
							<h1 className={'leading-lg text-md font-bold uppercase text-medium-grey pl-6 pt-4'}>{`${t(
								'allBoards')} (${boards.length})`}</h1>
							{boards.map((board: string) => <BoardButtonElement key={board} board={board} changeBoard={onBoardChange}
																			   className={'text-medium-grey'}/>)}
							<BoardButtonElement board={t('createNewBoard')} className={'text-main-purple'}
												createBoard={createNewBoard}/>
							<div
								className={'w-[90%] bg-very-dark-grey rounded-md h-12 self-center my-4 flex justify-center items-center gap-x-6'}>
								<Image src={LightModeIcon} alt={'light-mode-icon'} height={19} width={19}/>
								<Switch.Root
									className="w-[40px] h-[20px] bg-main-purple rounded-full relative aria-checked:bg-main-purple outline-none cursor-default"
									id="theme"
								>
									<Switch.Thumb
										className="block w-[14px] h-[14px] bg-white rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[22px]"/>
								</Switch.Root>
								<Image src={DarkModeIcon} alt={'dark-mode-icon'} height={19} width={19}/>
							</div>
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
			{isCreateNewBoardDialogOpen &&
				<AddNewBoardDialog isOpen={isCreateNewBoardDialogOpen} onClose={() => setIsCreateNewBoardDialogOpen(false)}
								   columns={[]}/>}
		</>
	)
}

export default SelectBoardDialog;
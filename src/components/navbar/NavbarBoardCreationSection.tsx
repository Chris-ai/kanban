'use client'
import React, {useState} from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import AddIcon from "@/assets/icon-add-task-mobile.svg";
import DotsIcon from "@/assets/icon-vertical-ellipsis.svg";
import AddNewBoardDialog from "@/components/dialog/AddNewBoardDialog";

interface NavbarBoardCreationSectionProps {

}

const NavbarBoardCreationSection: React.FC<NavbarBoardCreationSectionProps> = ({}) => {
	const [isCreateNewBoardDialogOpen, setIsCreateNewBoardDialogOpen] = useState<boolean>(false);

	const createNewBoard = () => {
		setIsCreateNewBoardDialogOpen(true);
	}

	const editBoard = () => {
		setIsCreateNewBoardDialogOpen(true);
	}

	return (
		<>
			<div className={'flex justify-center items-center'}>
				<Button appearance={'primary'} type={'icon'} onClick={createNewBoard}>
					<Image
						src={AddIcon}
						alt={'icon-add-task-mobile'}
						height={12}
						width={12}
					/>
				</Button>

				<Button appearance={'transparent'} type={'icon'} onClick={editBoard}>
					<Image
						src={DotsIcon}
						className={'h-4 w-1'}
						alt={'icon-dots-task-mobile'}
						height={16}
						width={3}
					/>
				</Button>
			</div>
			{isCreateNewBoardDialogOpen &&
				<AddNewBoardDialog isOpen={isCreateNewBoardDialogOpen} onClose={() => setIsCreateNewBoardDialogOpen(false)}
								   columns={[]}/>}
		</>
	)
}

export default NavbarBoardCreationSection;
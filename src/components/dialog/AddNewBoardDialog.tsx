'use client'
import React, {useState} from "react";
import useLocalization from "@/hooks/useLocalization";
import CustomDialog from "@/components/dialog/CustomDialog";
import Input from "@/components/common/Input";
import CloseIcon from "@/assets/icon-cross.svg";
import Image from 'next/image';
import Button from "@/components/common/Button";

interface AddNewBoardDialogProps {
    isOpen: boolean,
    onClose: () => void,
	columns: string[]
}

interface NewColumnInputProps {
	id: string,
	onC: () => void
}

const NewColumnInput: React.FC<NewColumnInputProps> = ({id, onC}) => {
	const handleOnChange = () => {
		onC();
	}

	return (
		<div className={'flex gap-x-4 justify-start items-center'}>
			<Input id={id} onChange={handleOnChange} className={'flex-1'} />
			<Image src={CloseIcon} alt={'remove-column-from-board'} width={16} height={16}/>
		</div>
	)
}


const AddNewBoardDialog: React.FC<AddNewBoardDialogProps> = ({isOpen, onClose, columns}) => {
    const {t} = useLocalization();

    const [boardName, setBoardName] = useState<string>('');

	const addNewColumn = () => {
		console.log('add new columns')
	}

	const createBoard = () => {
		console.log('create board')
	}

    return (
        <CustomDialog isOpen={isOpen} onClose={onClose}>
            <div className={'flex flex-col gap-6 p-6'}>
                <h1 className={'heading-l'}>{t('addNewBoard')}</h1>
                <Input id={t('boardName')} label={t('boardName')} onChange={setBoardName} value={boardName} placeholder={t('boardNameInputPlaceholder')}/>
                <div className="flex flex-col gap-y-3">
                    <h3 className={'font-bold text-xs'}>{t('boardColumns')}</h3>
					<NewColumnInput id={'sda'} onC={() => console.log('el')} />
					<NewColumnInput id={'sda'} onC={() => console.log('el')} />
					<NewColumnInput id={'sda'} onC={() => console.log('el')} />
					<NewColumnInput id={'sda'} onC={() => console.log('el')} />
					<Button onClick={addNewColumn} appearance={'secondary'}>
						{t('addNewColumn')}
					</Button>
                </div>
				<Button appearance={'primary'} onClick={createBoard}>
					{t('createNewBoardWithoutPlus')}
				</Button>
            </div>
        </CustomDialog>
    )
}

export default AddNewBoardDialog;
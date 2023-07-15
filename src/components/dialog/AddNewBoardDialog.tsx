'use client'
import React, {useEffect, useState} from "react";
import useLocalization from "@/hooks/useLocalization";
import CustomDialog from "@/components/dialog/CustomDialog";
import Input, {InputError} from "@/components/common/Input";
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
	removeColumn: (i: number) => void,
	onChange: (value: string, index: number) => void
	value: string,
	index: number
}

const NewColumnInput: React.FC<NewColumnInputProps> = ({id, removeColumn, onChange, value, index}) => {
	const handleOnChange = (value: string) => {
		onChange(value, index);
	}

	const handleOnClick = () => {
		removeColumn(index);
	}

	return (
		<div className={'flex justify-between items-center gap-x-4'}>
			<Input id={id} onChange={handleOnChange} value={value}/>
			<Button className={'px-0 py-0'} onClick={handleOnClick} type={'icon'} appearance={'transparent'}>
				<Image src={CloseIcon} alt={'remove-column-from-board'} width={16} height={16}/>
			</Button>
		</div>
	)
}


const AddNewBoardDialog: React.FC<AddNewBoardDialogProps> = ({isOpen, onClose, columns}) => {
    const {t} = useLocalization();
	const defaultColumns: string[] = [t('toDo'), t('inProgress'), t('done')];
	const [boardColumns, setBoardColumns] = useState<string[]>(defaultColumns);

    const [boardName, setBoardName] = useState<string>('');
	const [boardNameError, setBoardNameError] = useState<InputError | null>(null);


	const addNewColumn = () => {
		const emptyArrayElement = '';
		setBoardColumns([...boardColumns, emptyArrayElement])
	}

	const removeColumn = (index: number) => {
		setBoardColumns([...boardColumns.filter((column, i) => i !== index)])
	}

	const createBoard = () => {
		console.log('create board')
		if(boardName === '') {
			console.log('setErro');
			setBoardNameError({message: t('boardNameEmptyError')})
			return;
		}
	}

	const updateColumn = (newValue: string, index: number) => {
		boardColumns[index] = newValue;
		setBoardColumns([...boardColumns]);
	}

	return (
		<CustomDialog isOpen={isOpen} onClose={onClose}>
			<div className={'flex flex-col gap-6 p-6'}>
				<h1 className={'heading-l'}>{t('addNewBoard')}</h1>
				<Input id={t('boardName')} label={t('boardName')} onChange={setBoardName} value={boardName}
					   placeholder={t('boardNameInputPlaceholder')} error={boardNameError}/>
				<div className="flex flex-col gap-y-3">
					<h3 className={'font-bold text-xs'}>{t('boardColumns')}</h3>
					{boardColumns.map((col, index) =>
						<NewColumnInput
							id={col}
							key={index}
							value={col}
							index={index}
							removeColumn={removeColumn}
							onChange={updateColumn}/>
					)}
					<Button onClick={addNewColumn} appearance={'secondary'}>
						{t('addNewColumn')}
					</Button>
				</div>
				<Button appearance={'primary'} onClick={createBoard}>
					{t('createNewBoardWithoutPlus')}
				</Button>
			</div>
		</CustomDialog>
	);
}

export default AddNewBoardDialog;
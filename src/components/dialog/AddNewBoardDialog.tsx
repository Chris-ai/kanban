'use client'
import React, {useState} from "react";
import useLocalization from "@/hooks/useLocalization";
import CustomDialog from "@/components/dialog/CustomDialog";
import {Input} from "@/components/common/Input";

interface AddNewBoardDialogProps {
    isOpen: boolean,
    onClose: () => void,
}

const AddNewBoardDialog: React.FC<AddNewBoardDialogProps> = ({isOpen, onClose}) => {
    const {t} = useLocalization();

    const [boardName, setBoardName] = useState<string>('');

    return (
        <CustomDialog isOpen={isOpen} onClose={onClose}>
            <div className={'flex flex-col gap-6 p-6'}>
                <h1 className={'heading-l'}>{t('addNewBoard')}</h1>
                <Input id={t('boardName')} label={t('boardName')} onChange={setBoardName} value={boardName} placeholder={t('boardNameInputPlaceholder')}/>
                <div className="flex flex-col">
                    <h3 className={'font-bold text-xs mb-2'}>{t('boardColumns')}</h3>
                    <div className={}>

                    </div>
                </div>
            </div>
        </CustomDialog>
    )
}

export default AddNewBoardDialog;
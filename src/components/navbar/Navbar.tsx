'use client'
import Button from "@/components/common/Button";
import AddIcon from "@/assets/icon-add-task-mobile.svg";
import DotsIcon from "@/assets/icon-vertical-ellipsis.svg";
import MobileLogo from "@/assets/logo-mobile.svg";
import Image from 'next/image'
import SelectBoard from "@/components/navbar/SelectBoard";
import AddNewBoardDialog from "@/components/dialog/AddNewBoardDialog";
import React, {useState} from "react";

const Navbar: React.FC = () => {

    const dashboards = ['1', 'Very long project name to check if it not break my ui', 'project n 14']
    const [isCreateNewBoardDialogOpen, setIsCreateNewBoardDialogOpen] = useState<boolean>(false);
    
    const createNewBoard = () => {
        setIsCreateNewBoardDialogOpen(true);
    }
    

    return (
        <>
        <nav className="flex items-center justify-between h-16 bg-dark-grey p-4">
            <div className={'flex justify-center items-center gap-4'}>
                <Image
                    src={MobileLogo}
                    alt={'logo-mobile'}
                    width={24}
                    height={24}
                />
                <SelectBoard value={'Project Name 1'} dashboards={dashboards}/>
            </div>
            <div className={'flex justify-center items-center'}>
                <Button appearance={'primary'} type={'icon'} onClick={createNewBoard}>
                    <Image
                        src={AddIcon}
                        alt={'icon-add-task-mobile'}
                        height={12}
                        width={12}
                    />
                </Button>

                <Button appearance={'transparent'} type={'icon'} onClick={() =>  console.log('touch my button')}>
                    <Image
                        src={DotsIcon}
                        className={'h-4 w-1'}
                        alt={'icon-dots-task-mobile'}
                        height={16}
                        width={3}
                    />
                </Button>
            </div>
        </nav>
            {isCreateNewBoardDialogOpen && <AddNewBoardDialog isOpen={isCreateNewBoardDialogOpen} onClose={() => setIsCreateNewBoardDialogOpen(false)} columns={[]} />}
        </>
    )
}


export default Navbar;
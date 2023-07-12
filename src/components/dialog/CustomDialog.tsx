import React from "react";
import {Dialog} from "@headlessui/react";

interface CustomDialogProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

const CustomDialog: React.FC<CustomDialogProps> = ({isOpen, onClose, children}) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center" aria-hidden="true">
                <Dialog.Panel>
                    <div className={'bg-dark-grey rounded-lg w-[340px] flex flex-col'}>
                        {children}
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default CustomDialog;
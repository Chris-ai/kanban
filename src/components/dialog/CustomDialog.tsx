import React from "react";
import {Dialog} from "@headlessui/react";
import cn from "classnames";

interface CustomDialogProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
	className?: string
}

const CustomDialog: React.FC<CustomDialogProps> = ({isOpen, onClose, children, className}) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center" aria-hidden="true">
                <Dialog.Panel>
                    <div className={cn('bg-dark-grey rounded-lg w-[340px] flex flex-col', className)}>
                        {children}
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default CustomDialog;
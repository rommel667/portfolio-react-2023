import { FC } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ModalProps {
    open: boolean;
    closeModal: () => void;
    cancel: () => void;
    modalTitle: string;
    mode: string;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ open, closeModal, cancel, modalTitle, children, mode }) => {
    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 mx-auto z-30 overflow-y-auto w-full lg:w-8/12 "
                    onClose={closeModal}
                >

                    <div className="min-h-screen px-4 text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className={`${mode === 'dark' ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"} inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl`}>
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 flex items-center justify-between mb-3"
                                >

                                    <p>{modalTitle}</p>
                                    <svg onClick={cancel} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Dialog.Title>
                                <div className="mt-2">

                                    {children}
                                </div>


                                <div className="mt-4 flex gap-2 items-center justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={cancel}

                                    >
                                        Cancel
                                    </button>

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal
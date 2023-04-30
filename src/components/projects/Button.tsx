import { FC } from 'react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'


interface ButtonProps {
    onClick: () => void;
    showButton: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, showButton }) => {
    return (
        <div className="bg-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition duration-500 ease-in-out hover:scale-110">
            <Transition
                as={Fragment}
                show={showButton}
                enter="transform transition duration-[500ms]"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                <button
                    onClick={onClick}
                    className="bg-green-600 px-2 py-1 rounded-md text-gray-200 focus:outline-none transition duration-500 ease-in-out transform  hover:scale-110"
                >
                    More Photos
                </button>
            </Transition>
        </div>
    )
}

export default Button
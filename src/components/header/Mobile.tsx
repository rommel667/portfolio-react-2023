import { FC, Fragment, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import Logo from './Logo'
import Mode from './Mode'
import { links } from './links'
import { Link } from 'react-scroll'

interface MobileProps {

}

const Mobile: FC<MobileProps> = ({ }) => {

    const [show, setShow] = useState(false)
    return (
        <div className="w-full">
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex flex-row items-center justify-between">
                            <Disclosure.Button className="flex focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                            </Disclosure.Button>
                            <Logo />
                            <Mode />
                        </div>
                        <Transition appear show={show} as={Fragment} static>
                            <div className="px-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm dark:bg-gray-800 bg-gray-600">
                                        <ul className="text-lg justify-center">
                                            {links.map(item => {
                                                return (
                                                    <li key={item.name}>
                                                        <Link
                                                            onClick={() => setShow(false)}
                                                            className="cursor-pointer text-gray-300 hover:text-gray-200 dark:hover:text-gray-200 dark:text-gray-300"
                                                            activeClass="active"
                                                            to={item.link}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={0}
                                                            duration={1000}
                                                        >{item.name}</Link>
                                                    </li>

                                                )
                                            })}
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition.Child>
                            </div>

                        </Transition>















                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default Mobile
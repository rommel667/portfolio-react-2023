import { FC } from 'react'
import GetInTouch from './GetInTouch'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
import ContactInfo from './ContactInfo'
import Form from './Form'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <div id="contacts" className="pb-20">
            <div className="text-4xl pt-20 font-semibold text-gray-600 dark:text-gray-200 mb-5">Contacts</div>

            <div className="border-2 p-5 rounded-md shadow-md">
                <div className="hidden lg:flex flex-row justify-between w-full gap-10">
                    <div className='w-1/2'>
                        <GetInTouch />
                        <ContactInfo />
                    </div>
                    <div className='w-1/2'>
                        <Form />
                    </div>
                </div>

                <div className="lg:hidden flex flex-col justify-between gap-4 text-sm sm:text-base">
                    <GetInTouch />
                    <Form />
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

export default Footer
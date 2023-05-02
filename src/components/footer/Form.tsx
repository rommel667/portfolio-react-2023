import { FC } from 'react'
import Input from '../common/Input'
import TextArea from '../common/TextArea'

interface FormProps {

}

const Form: FC<FormProps> = ({ }) => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <Input label='Enter your name' />
            <Input label='Enter a valid email address' />
            <TextArea label='Message' />
            <button
                onClick={() => console.log("Test")}
                className="bg-green-400 px-2 py-1 rounded-md text-gray-200 focus:outline-none"
            >
                Submit
            </button>
        </div>
    )
}

export default Form
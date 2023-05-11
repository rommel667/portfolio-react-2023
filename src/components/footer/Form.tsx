import { useState } from 'react'
import Input from '../common/Input'
import TextArea from '../common/TextArea'
import axios from 'axios';
import toast from 'react-hot-toast';

const initialInput = { name: '', email: '' }

const Form = () => {

    const [input, setInput] = useState(initialInput)
    const [message, setMessage] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)


    const sendGraphQLRequest = async (e: any) => {
        setIsProcessing(true)
        e.preventDefault()
        const successSent = localStorage.getItem('sent')

        if (successSent) {
            const count = parseInt(successSent, 10);
            if (count >= 2) {
                toast.error("Sorry, sending multiple messages is not allowed!")
                setIsProcessing(false)
                setInput(initialInput)
                setMessage('')
                return
            }
        }
        try {
            const response = await axios.post('https://noty-be.onrender.com/graphql', {
                query: `
                mutation SendMail($sendMailInput: SendMailInput!) {
                sendMail(sendMailInput: $sendMailInput) {
                  success
                  message
                }
              }
            `,
                variables: {
                    sendMailInput: { name: input.name, email: input.email, message }
                },
            });
            if (response?.data.data.sendMail.success) {
                toast.success("Message successfully sent!")
                setIsProcessing(false)
                setInput(initialInput)
                setMessage('')
                if (successSent) {
                    const count = parseInt(successSent, 10);
                    localStorage.setItem('sent', (count + 1).toString());
                } else {
                    localStorage.setItem('sent', (1).toString());
                }
            }
        } catch (error) {
            toast.error("Sorry, can you please try again!")
            setInput(initialInput)
            setMessage('')
            setIsProcessing(false)
        }
    }



    return (
        <form onSubmit={sendGraphQLRequest} className='flex flex-col gap-4 w-full'>
            <Input onChange={e => setInput({ ...input, name: e.target.value })} value={input.name} label='Enter your name' />
            <Input onChange={e => setInput({ ...input, email: e.target.value })} value={input.email} label='Enter a valid email address' />
            <TextArea onChange={e => setMessage(e.target.value)} value={message} label='Message' />
            <button
                type="submit"
                disabled={isProcessing}
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75">
                {isProcessing &&
                    <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                        <path
                            className="fill-blue-800"
                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                        <path
                            className="fill-blue-100"
                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                    </svg>}
                <span>{isProcessing ? 'Sending...' : 'Send'}</span>
            </button>

        </form>
    )
}

export default Form
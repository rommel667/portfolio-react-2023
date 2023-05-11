import { FC } from 'react'

interface GetInTouchProps {

}

const GetInTouch: FC<GetInTouchProps> = ({ }) => {
    return (
        <div className='w-full flex flex-col gap-5'>
            <div className="text-3xl font-semibold text-gray-600 dark:text-gray-400">GET IN TOUCH</div>
            <div className="text-lg font-semibold text-gray-500 dark:text-gray-500 text-justify">
                Whether you are looking to establish a new online presence, redesign an existing website, or need help with website maintenance, I am here to help. I look forward to hearing from you and helping you achieve your online goals.
            </div>
        </div>
    )
}

export default GetInTouch
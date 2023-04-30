import { FC, useState } from 'react'
import IconSelector from './IconSelector';
import { IStack } from '../../interfaces/interface';

interface IconProps {
    stack: IStack;
}

const Icon: FC<IconProps> = ({ stack }) => {
    const [showLabel, setShowLabel] = useState(false)

    return (
        <div key={stack.name} className="flex flex-col items-center relative mb-5">
            <div
                onMouseEnter={() => setShowLabel(true)}
                onMouseLeave={() => setShowLabel(false)}
                className={`${stack.color} flex border-2 rounded-md p-1 border-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
                <IconSelector iconName={stack.name} size={25} />
            </div>
            <p className={`${showLabel ? "text-gray-800 dark:text-gray-200" : "text-gray-200 dark:text-gray-800"} text-xs absolute top-full`}>{showLabel ? stack.name : ""}</p>
        </div>
    )
}

export default Icon
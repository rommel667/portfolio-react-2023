import { FC } from 'react'
import { IStack } from '../../interfaces/interface';
import IconSelector from '../projects/IconSelector';

interface TechProps {
    stack: IStack;
}

const Tech: FC<TechProps> = ({ stack }) => {
    return (
        <div className="border-2 p-2 rounded-md shadow-md flex items-center gap-2 md:gap-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div
                className={`${stack.color} hidden md:flex`}
            >

                <IconSelector iconName={stack.name} size={50} />
            </div>
            <div
                className={`${stack.color} flex md:hidden`}
            >
                <IconSelector iconName={stack.name} size={30} />
            </div>
            <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300">{stack.name}</div>

        </div>
    )
}

export default Tech
import { FC } from 'react'
import Tech from './Tech';
import { IStack } from '../../interfaces/interface';

interface TechGroupProps {
    stacks: IStack[];
    title: string;
}

const TechGroup: FC<TechGroupProps> = ({ stacks, title }) => {
    return (
        <div className="border-2 rounded-md p-1 w-full shadow-md">
            <div className="text-2xl flex justify-center border-2 rounded-md shadow dark:text-gray-300 mb-5 bg-gray-200 dark:bg-gray-800 text-gray-700">{title}</div>
            <div className=" flex flex-col items-center">
                <div className="flex flex-wrap gap-5 space-y-3 mx-auto px-3 pb-5 justify-evenly">
                    {stacks.map(stack => {
                        return (
                            <Tech key={stack.name} stack={stack} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TechGroup
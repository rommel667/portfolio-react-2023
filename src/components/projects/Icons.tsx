import { FC } from 'react'
import Icon from './Icon'
import { IStack } from '../../interfaces/interface'

interface IconsProps {
    stacks: IStack[]
}

const Icons: FC<IconsProps> = ({ stacks }) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 w-full">
            {stacks.map(stack => {
                return (
                    <Icon key={stack.name} stack={stack} />
                )
            })}
        </div>
    )
}

export default Icons
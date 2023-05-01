import { FC } from 'react'
import { technologies } from './tech-list'
import TechGroup from './TechGroup'

interface TechnologiesProps {

}

const Technologies: FC<TechnologiesProps> = ({ }) => {
    return (
        <div id="tech" className="">
            <div className="text-4xl pt-20 font-semibold text-gray-600 dark:text-gray-200">Technologies</div>
            <div className="grid lg:grid-cols-3 place-items-center items-start mt-10 gap-10">
                {technologies.map(group => {
                    return (
                        <TechGroup key={group.title} stacks={group.stacks} title={group.title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies
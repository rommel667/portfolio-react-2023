import { FC } from 'react'
import { DiGithubBadge } from "react-icons/di";

interface IntroductionProps {

}

const Introduction: FC<IntroductionProps> = ({ }) => {
    return (
        <div className="row-span-full col-start-1 col-span-3 flex flex-col justify-center">
            <div className="space-y-6">
                <div className="text-gray-800 dark:text-gray-300 xl:text-6xl lg:text-4xl md:text-4xl text-3xl font-bold tracking-wider font-serif">
                    I Am <br />
                    Rommel Velasco
                </div>
                <div className="text-gray-600 dark:text-gray-400 xl:text-2xl lg:text-xl md:text-base tracking-wider leading-loose text-justify space-y-2">
                    <div>A Licensed Electronics Engineer by profession.</div>
                    <div>I'm a self-taught developer creating web and mobile applications for fun and hopefully make a living out of it.</div>
                    <div>Learning new things and making an idea come to life is my passion.</div>
                </div>
                <button
                    type="button"
                    className="focus:outline-none bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-gray-300 font-semibold px-6 py-4 md:px-8 md:text-xl"
                >
                    <div className="flex items-center">
                        <DiGithubBadge size={35} />
                        <p>Check My Github</p>
                    </div>

                </button>
            </div>
        </div>
    )
}

export default Introduction
import { FC } from 'react'
import { DiGithubBadge } from "react-icons/di";
import { TypeAnimation } from 'react-type-animation';

interface IntroductionProps {

}

const Introduction: FC<IntroductionProps> = ({ }) => {
    return (
        <div className="row-span-full col-start-1 col-span-3 flex flex-col justify-center">
            <div className="space-y-6">
                {/* <div className="text-gray-800 dark:text-gray-300 xl:text-6xl lg:text-4xl md:text-4xl text-3xl font-bold tracking-wider font-serif">
                    I Am <br />
                    Rommel Velasco
                </div> */}

                <div>
                    <TypeAnimation
                        className="text-gray-700 dark:text-gray-300 xl:text-4xl lg:text-2xl md:text-2xl text-2xl font-bold tracking-wider font-serif"
                        sequence={[
                            'I am Rommel Velasco',
                            2000, // Waits 2s
                            'Electronics Engineer',
                            2000, // Waits 2s
                            'Self-taught Web Developer',
                            2000, // Waits 2s
                            () => {
                                console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </div>
                <div className="text-gray-500 dark:text-gray-400 xl:text-2xl lg:text-xl md:text-base tracking-wider leading-loose text-justify space-y-2">

                    {/* <div>I'm a self-taught developer creating web and mobile applications for fun and hopefully make a living out of it.</div> */}
                    <div>Transforming ideas into digital reality - a self-taught web developer with a passion for creating exceptional online experiences.</div>
                </div>
                <button
                    type="button"
                    className="focus:outline-none bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 rounded-2xl text-gray-300 font-semibold px-6 py-4 md:px-8 md:text-xl"
                >
                    <a target="_blank" href="https://github.com/rommel667" rel="noopener noreferrer">
                        <div className="flex items-center">

                            <DiGithubBadge size={35} />
                            <p>Check My Github</p>

                        </div>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Introduction
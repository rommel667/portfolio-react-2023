import { FC } from 'react'
import Introduction from './Introduction'
import BackgroundAnimation from './BackgroundAnimation'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
    return (
        <section id="home" className="grid md:grid-cols-5 pt-36 md:pt-20 lg:10">
            <Introduction />
            <BackgroundAnimation />
        </section>
    )
}

export default Hero
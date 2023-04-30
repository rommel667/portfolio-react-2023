import { FC } from 'react'
import { Link } from 'react-scroll'
import { links } from './links'

interface MenuProps {

}

const Menu: FC<MenuProps> = ({ }) => {
    return (
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700 dark:text-gray-300">

            {links.map(item => {
                return (

                    <Link
                        key={item.link}
                        className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-200"
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >{item.name}</Link>

                )
            })}
        </ul>
    )
}

export default Menu
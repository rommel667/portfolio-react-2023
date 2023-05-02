import Footer from "../footer/Footer";
import Header from "../header/Header"
import { FC } from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-gray-200 dark:bg-gray-700 overscroll-contain scroll-smooth xl:px-36 lg:px-24 md:px-20 px-5">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
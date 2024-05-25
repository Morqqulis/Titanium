import { appleImg, bagImg, searchImg } from '@utils/index'
import { navLists } from '@constants/index'

const Navbar = () => {
    return (
        <nav className={`screen-max-width flex w-full justify-between`}>
            <img src={appleImg} alt="logo" width={14} height={18} />
            <div className={`max-sm:hidden flex flex-1 justify-center`}>
                {navLists.map(item => (
                    <div className={`cursor-pointer px-5 text-sm text-gray transition-all hover:text-white`} key={item}>
                        {item}
                    </div>
                ))}
            </div>

            <div className={`max-sm:justify-end max-sm:flex-1 flex items-center gap-7`}>
                <img src={searchImg} alt="image" width={18} height={18} />
                <img src={bagImg} alt="image" width={18} height={18} />
            </div>
        </nav>
    )
}

export default Navbar

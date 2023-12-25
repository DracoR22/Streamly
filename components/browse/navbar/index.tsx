import { Actions } from "./Actions"
import Logo from "./Logo"
import Search from "./Search"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-20 z-[49] bg-neutral-800 px-2 lg:px-4 flex justify-between
        items-center shadow-sm">
            <Logo/>
            <Search/>
            <Actions/>
        </nav>
    )
}
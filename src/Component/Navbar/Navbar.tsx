import Logo from "../../assets/logo.png"
import { AiOutlineDollar } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

interface NavbarProps {
    coin: number;
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const Navbar = ({ coin, theme, setTheme }: NavbarProps) => {
    const toggleTheme = () => setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')

    return (
        <div className='border-b border-[var(--border-color)] py-4'>
            <nav className='container mx-auto flex items-center justify-between gap-4 px-4 lg:px-0'>
                <img className="w-28 sm:w-36" src={Logo} alt="Dream 11 home" />
                <div className='flex items-center gap-2 sm:gap-5 lg:gap-10'>
                    <ul className='hidden gap-5 text-sm font-medium sm:flex lg:gap-8 lg:text-base'>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Teams</li>
                        <li>Schedule</li>
                    </ul>
                    <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} className='btn btn-circle btn-ghost text-xl'>
                        {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
                    </button>
                    <button className='btn border-amber-100 text-sm font-bold sm:text-base lg:text-xl'>Coin<span><AiOutlineDollar className='text-yellow-300'/></span> <span>{coin}</span></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
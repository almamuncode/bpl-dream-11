import Logo from "../../assets/logo.png"
import { AiOutlineDollar } from 'react-icons/ai';

const Navbar = ({coin}: {coin:number}) => {

    

    return (
        <div className=' py-4'>
            <nav className='flex justify-between container mx-auto'>
                <img src={Logo} alt="" />
                <div className='flex items-center gap-20'>
                    <ul className='flex gap-20'>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Teams</li>
                        <li>Schedule</li>
                    </ul>
                    <button className='font-bold btn border-amber-100 text-xl'>Coin<span><AiOutlineDollar className='text-yellow-300'/></span> <span>{coin}</span></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
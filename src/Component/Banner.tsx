import { Bounce, toast } from "react-toastify";
import Cricket from "../assets/banner-main.png";
import Background from "../assets/bg-shadow.png";

interface PlayersProps {
    coin: number;
    setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const Banner = ({ coin, setCoin }: PlayersProps) => {

    const handleAddCoins = () => {
        const newCoins = coin + 5000
        setCoin(newCoins)
        toast.success(`Wow You have Got 5000 Coins`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
    }

    return (
        <div
            className="container mx-auto my-6 min-h-105 rounded-2xl bg-cover bg-center bg-no-repeat px-4
                       flex flex-col items-center justify-center text-center sm:my-8 sm:min-h-115 lg:my-10 lg:min-h-125"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <img
                src={Cricket}
                alt="Cricket"
                className="my-6 w-44 sm:my-8 sm:w-56 lg:my-10 lg:w-64"
            />

            <h1 className="max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="mt-3">
                Beyond Boundaries Beyond Limits
            </p>

            <button onClick={() => handleAddCoins()} className="btn btn-warning my-5">
                Claim Free Credit
            </button>
        </div>
    );
};

export default Banner;
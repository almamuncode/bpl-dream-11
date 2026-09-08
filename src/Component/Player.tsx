import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../type";
import { Bounce, toast } from "react-toastify";

interface PlayerProps {
    player: PlayerType;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
    selectedPlayers: PlayerType[];
}

const Player = ({ player, coin, setCoin, setSelectedPlayers, selectedPlayers }: PlayerProps) => {

    const [isSelected, setIsSelected] = useState(false)
    const handleSelectPlayer = () => {
        setIsSelected(true)
        const newCoinPrice = coin - player.price
        if (newCoinPrice >= 0) {
            setCoin(newCoinPrice)
            toast.success(`${player.name} is purchased successfully`, {
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
        } else {
            toast.error("Insufficient Coin", {
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
        const newPlayers = [...selectedPlayers, player]
        setSelectedPlayers(newPlayers)
    }

    return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Player Image */}
            <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                    src={player.profileImg}
                    alt={player.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />

                {/* Rating */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 text-black px-3 py-1 text-sm font-semibold shadow backdrop-blur"> ⭐ {player.rating}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Name + Country */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900">{player.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">🌍 {player.country}</p>
                </div>

                {/* Category + Price */}
                <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                        {player.category}</span>

                    <div className="text-right">
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-lg font-bold text-gray-900">${player.price.toLocaleString()}</p>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={() => handleSelectPlayer()}
                    disabled={isSelected}
                    className="btn w-full rounded-xl shadow-md transition-all bg-green-500 text-white border-none
                     hover:bg-green-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-100      disabled:cursor-not-allowed">
                    {isSelected ? "Selected" : "Choose Player"}
                </button>
            </div>
        </div>
    );
};

export default Player;
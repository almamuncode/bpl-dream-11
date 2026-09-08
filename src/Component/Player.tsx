import type { PlayerType } from "../type";

interface PlayerProps {
    player: PlayerType;
}

const Player = ({ player }: PlayerProps) => {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Player Image */}
            <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                    src={player.profileImg}
                    alt={player.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 text-black px-3 py-1 text-sm font-semibold shadow backdrop-blur">
                    ⭐ {player.rating}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Name + Country */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        {player.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        🌍 {player.country}
                    </p>
                </div>

                {/* Category + Price */}
                <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                        {player.category}
                    </span>

                    <div className="text-right">
                        <p className="text-xs text-gray-400">
                            Price
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                            ${player.price.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <button className="btn w-full rounded-xl border-none bg-green-500 text-white hover:bg-green-600">
                    Choose Player
                </button>
            </div>
        </div>
    );
};

export default Player;
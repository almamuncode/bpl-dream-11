import { MdDelete } from "react-icons/md";
import type { PlayerType } from "../type";

interface SelectedPlayersProps {
    selectedPlayers: PlayerType[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
    coin: number;
    setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }: SelectedPlayersProps) => {

    const handleRemovePlayers = (player: PlayerType) => {
        const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name != player.name)
        setSelectedPlayers(restPlayers)
        const newCoins = coin + player.price
        setCoin(newCoins)
    }
    if (selectedPlayers.length === 0) {
        return (
            <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                <div className="mb-4 text-5xl">🏏</div>

                <h2 className="text-2xl font-bold text-gray-800">
                    No Players Selected
                </h2>

                <p className="mt-2 max-w-md text-gray-500">
                    You haven't selected any players yet. Go to the Available
                    Players section and choose your dream team.
                </p>
            </div>
        );
    }
    return (
        <div>
            <div className="grid gap-3">
                {selectedPlayers.map((selectedPlayer) => (
                    <div key={selectedPlayer.id} className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                        <div className="flex justify-between items-center">

                            <div className="flex gap-3"><img className="w-40 rounded-xl" src={selectedPlayer.profileImg} alt="" />
                                <div>
                                    <h2 className="font-semibold text-2xl text-gray-900">{selectedPlayer.name}</h2>
                                    <p className="text-gray-500">{selectedPlayer.category}</p>
                                </div>
                            </div>
                            <span onClick={() => handleRemovePlayers(selectedPlayer)} className="text-red-500 text-3xl mr-10 cursor-pointer"><MdDelete /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;
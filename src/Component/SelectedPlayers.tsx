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
            <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface-muted)] p-6 text-center sm:p-8">
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
                    <div key={selectedPlayer.id} className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-3 shadow-sm">
                        <div className="flex items-center justify-between gap-3">

                            <div className="flex min-w-0 items-center gap-3"><img className="w-24 rounded-xl sm:w-40" src={selectedPlayer.profileImg} alt={selectedPlayer.name} />
                                <div>
                                    <h2 className="text-lg font-semibold text-[var(--text-color)] sm:text-2xl">{selectedPlayer.name}</h2>
                                    <p className="text-[var(--muted-color)]">{selectedPlayer.category}</p>
                                </div>
                            </div>
                            <button aria-label={`Remove ${selectedPlayer.name}`} onClick={() => handleRemovePlayers(selectedPlayer)} className="mr-2 cursor-pointer text-2xl text-red-500 sm:mr-10 sm:text-3xl"><MdDelete /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectedPlayers;
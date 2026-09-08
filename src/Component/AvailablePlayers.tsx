import type { PlayerType } from "../type";
import Player from "./Player";

interface AvailablePlayersProps {
    players: PlayerType[];
    coin: number;
    setCoin: React.Dispatch<React.SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

const AvailablePlayers = ({ players, coin, setCoin, setSelectedPlayers, selectedPlayers }: AvailablePlayersProps) => {
    console.log(players, "players available");

    return (
        <div>
            <div className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
                {players.map((player) => <Player selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} key={player.id} player={player}></Player>)}
            </div>
        </div>
    );
};

export default AvailablePlayers;